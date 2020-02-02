import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Webcam from 'react-webcam'
import { Icon } from '../Images/Images'
import { Text } from '../Texts/Texts'
import ErrorIcon from '../../assets/error-icon.png'
import SuccessIcon from '../../assets/success-icon.png'
import { GlobalContext } from '../../contexts/GlobalContext'
import APIService from '../../services/APIService'

const CameraContainer = styled.div`
    align-items: center;    
    display: flex;
    flex-direction: column;
    position: relative;
`

const StyledCamera = styled(Webcam)`
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    margin-top: 2rem;
    height: auto;
    width: 95%;

    @media only screen and (min-width: 768px) {
        width: 55%;
    }
`

const StyledText = styled(Text)`
    margin-top: 2rem;
`

const Camera:FunctionComponent<{}> = () => {
    const cameraRef = useRef(null)
    const [error, setError] = useState<boolean>(false)
    const { isDialogOpen, setIsDialogOpen, setPictureTaken, status, setStatus } = useContext(GlobalContext)
    const theme = useContext(ThemeContext)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDialogOpen && (status === 'error' || status === '')) {
                APIService.sendPhoto()
                    .then(res => res.json())
                    .then(res => {
                        if (cameraRef.current != null) {
                            // @ts-ignore
                            setPictureTaken(cameraRef.current.getScreenshot())
                        }

                        if (res.summary.outcome === 'Approved') {
                            setStatus('success')
                            setTimeout(() => setIsDialogOpen(false), 1000)
                        } else {
                            setStatus('error')
                        }
                    })
            }
        }, 3000)

        return () => clearInterval(interval)
    })

    useEffect(() => {
        if (isDialogOpen) {
            setStatus('')
        }
    }, [isDialogOpen])

    if (error) {
        return (
            <Text color = { theme.colors.error }>App can't access to your camera, please check permissions and try again later</Text>
        )
    }

    return (
        <CameraContainer>
            <StyledCamera
                audio = { false }
                onUserMediaError = {() => setError(true)}
                ref = { cameraRef }
                screenshotFormat = 'image/jpeg'
                style = {{ borderColor: status !== '' ? theme.colors[status] : 'lightgray' }}
                videoConstraints = {{
                    facingMode: 'forward',
                    height: 720,
                    width: 1280
                }}/>
            { status === 'error' ? <StyledText color = { theme.colors[status] }><Icon alt = 'success' src = { ErrorIcon }/> Too much glare!</StyledText> : null }
            { status === 'success' ? <StyledText color = { theme.colors[status] }><Icon alt = 'error' src = { SuccessIcon }/> Picture taken!</StyledText> : null }
        </CameraContainer>
    )
}

export default Camera