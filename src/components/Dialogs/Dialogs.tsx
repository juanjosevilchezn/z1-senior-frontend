import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { Title, Text } from '../Texts/Texts'
import Camera from '../Camera/Camera'
import BackgroundImage from '../../assets/dialog-background.jpg'
import { GlobalContext } from '../../contexts/GlobalContext'

type DialogProps = {
    open: boolean
}

const Dialog = styled.div<DialogProps>`
    background-image: url(${BackgroundImage});
    background-position: center;
    display: ${props => props.open ? 'block' : 'none'};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
`

const DialogContent = styled.div`
    align-items: center;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
`

const TextContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto 0;
`

const CloseButton = styled.button`
    background-color: transparent;
    border: unset;
    border-radius: 32px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 1rem 2rem;
    margin: auto 0;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;

    &:hover {
        background-color: rgba(255,255,255,0.2);
        color: white;
    }

    &:focus {
        outline: 0;
    }
`

const TakePictureDialog:FunctionComponent<{}> = () => {
    const { isDialogOpen, setIsDialogOpen, status } = useContext(GlobalContext)

    const _onCancelButtonClick = () => {
        setIsDialogOpen(false)
    }

    return (
        <Dialog open = { isDialogOpen }>
            <DialogContent>
                <TextContainer>
                    <Title color = 'white'>Take picture</Title>
                    <Text color = 'white'>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
                </TextContainer>
                <Camera/>
                <CloseButton onClick = { _onCancelButtonClick }>{ status === 'success' ? 'ACCEPT' : 'CANCEL' }</CloseButton>
            </DialogContent>
        </Dialog>
    )
}

export { TakePictureDialog }