import React, { FunctionComponent, useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { Title, Text } from '../Texts/Texts'
import CameraResult from '../CameraResult/CameraResult'
import { GlobalProvider, GlobalContext } from '../../contexts/GlobalContext'

type AppProps = {
  title?: string
}

const Header = styled.div`
  border-bottom: 1px solid black;
  padding: 1rem 1.5rem;
`

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
`

const App:FunctionComponent<AppProps> = ({ title }) => {
  const [isCameraAllowed, setIsCameraAllowed] = useState<boolean>(false)
  const { setStatus } = useContext(GlobalContext)

  useEffect(() => {
    const hasCamera = !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)

    if (hasCamera) {
      navigator.getUserMedia(
        { 
          audio: false,
          video: true
        }, 
        () => {
          setIsCameraAllowed(true)
        },
        () => {
          setIsCameraAllowed(false)
        }
      )
    }
  }, [])

  return (
    <div>
      <GlobalProvider>
        <Header>{ title }</Header>
        <Body>
          <Title>Scan your ID</Title>
          <Text>
            Take a picture. It may take time to validate your personal information.
          </Text>
          <CameraResult/>
        </Body>
      </GlobalProvider>
    </div>
    
  )
}

export default App
