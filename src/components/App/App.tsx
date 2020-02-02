import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Title, Text } from '../Texts/Texts'
import CameraResult from '../CameraResult/CameraResult'
import { TakePictureDialog } from '../Dialogs/Dialogs'
import { GlobalProvider } from '../../contexts/GlobalContext'
import Theme from '../Theme/Theme'

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
  return (
    <div>
      <GlobalProvider>
        <Theme>
          <Header>{ title }</Header>
          <Body>
            <Title>Scan your ID</Title>
            <Text>
              Take a picture. It may take time to validate your personal information.
            </Text>
            <CameraResult/>
          </Body>
          <TakePictureDialog />
        </Theme>
      </GlobalProvider>
    </div>
  )
}

export default App
