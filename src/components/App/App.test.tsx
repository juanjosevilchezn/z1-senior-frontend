import React from 'react'
import { act } from 'react-dom/test-utils'
import App from './App'
import { render } from 'react-dom'

describe('<App />', () => {
    it('renders without crashing', async () => {
        const container = document.createElement('div')
        await act(() => render(<App/>, container))
    })
})