import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {Global} from '@emotion/react'

import PokemonContextProvider from './context/PokemonContext'
import Routes from './routes'

const App = () => {
  const client  = new ApolloClient({
    uri : "https://graphql-pokeapi.vercel.app/api/graphql",
    cache : new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
        <Global 
          styles={{
            body : {
              margin : 0,
              padding : 0,
              fontSize : 16,
              fontFamily : 'Open Sans, sans-serif' 
            },
            button : {
              outline: 'none',
              border: 'none',
            },
            input : {
              outline: 'none',
              border: 'none',
            },
            'button:focus' : {
              outline: 'none',
              border: 'none',
            },
            'input:focus' : {
              outline: 'none',
              border: 'none',
            }
          }}
        />
        <PokemonContextProvider>
          <Routes />
        </PokemonContextProvider>
    </ApolloProvider>
  )
} 

export default App