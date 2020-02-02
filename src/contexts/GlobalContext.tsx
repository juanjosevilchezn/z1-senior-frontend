import React, { createContext, Dispatch, FunctionComponent, SetStateAction, useState } from 'react'

const contextInitialState = {
    isDialogOpen: false,
    setIsDialogOpen: () => {},
    pictureTaken: '',
    setPictureTaken: () => {},
    status: '',
    setStatus: () => {}
}

type ContextProps = {
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>
    status: string,
    setStatus: Dispatch<SetStateAction<string>>,
    pictureTaken: string,
    setPictureTaken: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>(contextInitialState)

const GlobalProvider:FunctionComponent = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [pictureTaken, setPictureTaken] = useState('')
    const [status, setStatus] = useState<string>('')

    return (
        <GlobalContext.Provider value = {{ isDialogOpen, setIsDialogOpen, pictureTaken, setPictureTaken, status, setStatus }}>
            { children }
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }