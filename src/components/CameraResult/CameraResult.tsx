import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { Icon, Image } from '../Images/Images'
import ErrorIcon from '../../assets/error-white-icon.png'
import SuccessIcon from '../../assets/success-white-icon.png'
import { GlobalContext } from '../../contexts/GlobalContext'

type ContainerProps = {
    status: string
}

type MessageProps = {
    color: string
}

const Container = styled.div<ContainerProps>`
    border-color: ${props => props.theme.colors[props.status] || 'unset'};
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 12rem;
    margin-top: 2rem;
    position: relative;
    width: 95%;

    @media only screen and (min-width: 768px) {
        width: 55%;
        height: 24rem;
    }
`



const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border: unset;
    border-radius: 32px;
    box-shadow: 0px 10px 20px rgba(47, 0, 121, 0.4);
    color: white;
    font-weight: bold;
    left: 50%;
    letter-spacing: 1px;
    padding: 1rem 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    width: fit-content;

    &:hover {
        background-color: white;
        color: ${props => props.theme.colors.primary};
    }

    &:focus {
        outline: 0;
    }
`

const Message = styled.div<MessageProps>`
    align-items: center;
    background-color: ${props => props.theme.colors[props.color] || 'unset'};
    border-radius: 1rem; 
    bottom: -1rem;
    color: white;
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 1rem;
`

const StyledIcon = styled(Icon)`
    margin-right: 0.5rem;
`

const CameraResult:FunctionComponent<{}> = () => {
    const { pictureTaken, status, setIsDialogOpen } = useContext(GlobalContext)

    return (
        <Container status = { status }>
            { pictureTaken !== '' ? <Image alt = 'result' src = { pictureTaken }/> : null }
            { status !== 'success' ? <Button onClick = {() => setIsDialogOpen(true)}>{ pictureTaken !== '' ? 'RETAKE A PICTURE' : 'TAKE A PICTURE' }</Button> : null }
            { status !== '' ? <Message color = { status }><StyledIcon alt = 'result' src = { status === 'success' ? SuccessIcon : ErrorIcon }/>{ status === 'success' ? 'APPROVED' : 'REJECTED' }</Message> : null }
        </Container>
    )
}

export default CameraResult