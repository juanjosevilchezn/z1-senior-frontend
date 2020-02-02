import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        error: '#DB0F13',
        primary: '#2f0079',
        success: '#4BB543'
    }
}

const Theme:FunctionComponent<{}> = ({ children }) => {
    return (
        <ThemeProvider theme = { theme }>
            { children }
        </ThemeProvider>
    )
}

export default Theme