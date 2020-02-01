import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import EmptyImage from '../../assets/empty.png'
import ColorService from '../../services/ColorService'
import { GlobalContext } from '../../contexts/GlobalContext'

type ContainerProps = {
    status: string
}

const Container = styled.div<ContainerProps>`
    border-color: ${props => ColorService.getColorByStatus(props.status || '')};
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    height: 14rem;
    margin-top: 2rem;
    position: relative;
    width: 22rem;
`

const Image = styled.img`
    height: 100%;
    object-fit: contain;
    width: 100%;
`

const Button = styled.button`
    background-color: #2f0079;
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

    &:hover {
        background-color: white;
        color: #2f0079;
    }

    &:focus {
        outline: 0;
    }
`



const CameraResult:FunctionComponent<{}> = () => {
    const { status } = useContext(GlobalContext)

    return (
        <Container status = { status }>
            <Image alt = 'result' src = { status !== 'error' && status !== 'success' ? EmptyImage : '' }/>
            <Button onClick = {() => console.log('clicked')}>TAKE A PICTURE</Button>
        </Container>
    )
}

export default CameraResult