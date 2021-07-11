import {useState} from 'react'
import {useQuery} from '@apollo/client'
import homeStyle from '../../styles/pages/Home'
import PokemonCard from '../../components/PokemonCard'
import Queries from '../../utils/Queries'

import Layout from "../../layout"

import Loader from '../../components/Loader'

const Home = () => {
    const [gqlVariables, setGqlVariables]  = useState({
        limit: 15,
        offset: 0,
    })

    const {loading, error, data} = useQuery(Queries.GET_POKEMONS, {
        variables : gqlVariables
    })

    const scrollToTop = () => {
        window.scrollTo(0,0)
    } 

    const nextPage = () => {
        setGqlVariables(prevState => ({
            ...prevState,
            offset : prevState.offset + 15
        }))
    }

    const prevPage = () => {
        setGqlVariables(prevState => ({
            ...prevState,
            offset : prevState.offset - 15
        }))
    }

    return(
        <Layout>
            {loading ?  <div className={homeStyle.container}>
            {Array.apply(null, Array(7)).map((item,index) => {
                return (
                    <Loader />
                )
            })}
        </div> : null}

        {error ? <center><p>Error, something wen't wrong !</p></center> : null}

        {loading || error ? null  : 
            <>
                <div className={homeStyle.container}>
                    {data.pokemons.results.map((pokemon,index) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                        )
                    })}
                </div>
                <div className={homeStyle.pagination.container}>
                    <button className={homeStyle.pagination.button} type="button" disabled={gqlVariables.offset === 0} onClick={prevPage}>Previus</button>
                    <button className={homeStyle.pagination.button} type="button" onClick={nextPage}>Next</button>
                </div>
            </>
        }
        </Layout>
    )
}

export default Home