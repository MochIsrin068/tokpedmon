
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import PokemonCardStyle from '../styles/components/PokemonCard' 
import {PokemonContext} from '../context/PokemonContext'

const PokemonCard = ({pokemon}) => {
    const pokemonContext = useContext(PokemonContext)
    const history = useHistory()

    return (
        <div className={PokemonCardStyle.container} title={pokemon.name} onClick={() => history.push(`/pokemon/${pokemon.name}`)}>
            <img className={PokemonCardStyle.image} src={pokemon.image} alt="" />
            <h3 className={PokemonCardStyle.title}>{pokemon.name}</h3>
            <p>Owned : <b>{pokemonContext.myPokemon.filter(item => item.name === pokemon.name).length || 0}</b></p>
        </div>
    )
}

export default PokemonCard