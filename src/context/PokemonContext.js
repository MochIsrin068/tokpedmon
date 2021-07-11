import {createContext, useState, useEffect} from 'react'

export const PokemonContext = createContext()

const PokemonContextProvider = ({children}) => {
    const [myPokemon, setMyPokemon] = useState(JSON.parse(localStorage.getItem('myPokemon')) ?? [])

    useEffect(() => {
        localStorage.setItem(`myPokemon`, JSON.stringify(myPokemon))
    }, [myPokemon])

    return(
        <PokemonContext.Provider
            value={{
                myPokemon,
                setMyPokemon
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider