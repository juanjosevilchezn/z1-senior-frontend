import React, { FunctionComponent, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Webcam from 'react-webcam'

type CameraProps = {
    status?: string
}

const handleStatusColor = (status?: string) => {
    switch(status) {
        case 'success':
            return '#4BB543'
        case 'error':
            return '#DB0F13'
        default:
            return 'unset'
    }
}

const CameraContainer = styled.div<CameraProps>`
    border-color: ${props => handleStatusColor(props.status || '')};
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    margin-top: 2rem;
`

const Camera:FunctionComponent<CameraProps> = ({ status }) => {
    const cameraRef = useRef(null)

    return (
        <CameraContainer status = { status }>
            <Webcam
                audio = { false }
                height = { 360 }
                onUserMedia = {() => console.log('hola') }
                onUserMediaError = {(error) => console.log(error) }
                ref = { cameraRef }
                screenshotFormat = 'image/jpeg'
                videoConstraints = {{
                    facingMode: 'forward',
                    height: 720,
                    width: 1280
                }}
                width = { 640 }/>
        </CameraContainer>
    )
}

export default Camera