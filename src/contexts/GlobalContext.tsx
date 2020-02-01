import React, { createContext, Dispatch, FunctionComponent, SetStateAction, useState } from 'react'

const contextInitialState = {
    isDialogOpen: false,
    setIsDialogOpen: () => {},
    status: '',
    setStatus: () => {}
}

type ContextProps = {
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>
    status: string,
    setStatus: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>(contextInitialState)

const GlobalProvider:FunctionComponent = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [status, setStatus] = useState<string>('')

    return (
        <GlobalContext.Provider value = {{ isDialogOpen, setIsDialogOpen, status, setStatus }}>
            { children }
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }