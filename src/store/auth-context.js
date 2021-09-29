import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    // better IDE auto-completion
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // To avoid infinite loop & only runs when we want it to run
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider
    value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext