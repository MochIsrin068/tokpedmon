
import {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import ProgressBar from "@ramonak/react-progress-bar";

import Queries from '../../utils/Queries'
import Loader from '../../components/Loader'
import DetailPokemonStyles from '../../styles/pages/DetailPokemon'

import Layout from '../../layout'

import {PokemonContext} from '../../context/PokemonContext'

const Pokemon = () => {
    const pokemonContext = useContext(PokemonContext)
    const params = useParams()
    const name = params.name

    const {data, loading, error} = useQuery(Queries.GET_POKEMON_DETAIL, {
        variables : { name : name }
    })

    const [isCatch, setIsCatch] = useState(false)
    const [image, setImage] = useState(null)
    const [nickname, setNickname] = useState(null)

    const catchPokemon = ({id, name, image}) => {
        pokemonContext.setMyPokemon(prevState => ([...prevState, {id : id, name : name, nickname : nickname, image : image}]))        
        setTimeout(() => {
            setIsCatch(false)
            setNickname(null)
        }, 500);
    }

    return(
        <Layout>
            {loading ? <div className={DetailPokemonStyles.container} style={{alignItems : "center", justifyContent : "center"}}><Loader width={300} height={300}/></div> : null}
            {error ? <center><p>Error, something wen't wrong !</p></center> : null}
            {loading || error ? null : 
                 <div className={DetailPokemonStyles.container} style={{background: isCatch ? "#f2f2f2f2" : null}}>
                 <div className={DetailPokemonStyles.baseInfo.container} onMouseOver={() => setImage(data.pokemon.sprites.back_default)} onMouseOut={() => setImage(data.pokemon.sprites.front_default)} style={{opacity : isCatch ? "20%" : "100%"}}>
                     <img className={DetailPokemonStyles.baseInfo.image} src={image === null ? data.pokemon.sprites.front_default : image} alt=""/>
                     <h2 className={DetailPokemonStyles.baseInfo.title}>{data.pokemon.name} ( {pokemonContext.myPokemon.filter(pokemon => pokemon.name === data.pokemon.name).length || 0} )</h2>
                     <div className={DetailPokemonStyles.baseInfo.moves.container}>
                         {data.pokemon.moves.slice(0, 5).map((move, index) => <span className={DetailPokemonStyles.baseInfo.moves.chip} key={index} title={move.move.name}>{move.move.name}</span>)}
                     </div>
                 </div>
 
                 <div className={DetailPokemonStyles.statsInfo.container} style={{opacity : isCatch ? "20%" : "100%"}}>
                     <div className={DetailPokemonStyles.statsInfo.types.container}>
                         <h3 className={DetailPokemonStyles.statsInfo.types.title}>Types</h3>
                         <div className={DetailPokemonStyles.statsInfo.types.chips.container}>
                             {data.pokemon.types.map(type => {
                                 return <span className={DetailPokemonStyles.statsInfo.types.chips.item} title={type.type.name}>{type.type.name}</span>
                             })}
                         </div>
                     </div>
 
                     <div className={DetailPokemonStyles.statsInfo.stats.container}>
                         <h3 className={DetailPokemonStyles.statsInfo.stats.title}>Stats</h3>
                         {data.pokemon.stats.map(stat => {
                             return (
                                 <div className={DetailPokemonStyles.statsInfo.stats.progress.container}>
                                     <h4 className={DetailPokemonStyles.statsInfo.stats.progress.title}>{stat.stat.name}</h4>
                                     <ProgressBar completed={stat.base_stat} width={200} height={16} bgColor="#C28AE4"/>
                                 </div>
                             )
                         })}
                     </div>
                 </div>
 
                 <button className={DetailPokemonStyles.button} onClick={() => {
                      setIsCatch(true)
                      window.scrollTo(0,0)
                 }} style={{opacity : isCatch ?  "20%" : "100%"}}>{isCatch ? '.....' : 'Catch'}</button>
 
                 {isCatch ? 
                     <div className={DetailPokemonStyles.catchModal.container}>
                         <h3 className={DetailPokemonStyles.catchModal.title}>Catch your pokemon</h3>
                         <input className={DetailPokemonStyles.catchModal.input} type="text" placeholder="Nickname" value={nickname} onChange={({target : {value}}) => setNickname(value)}/>
                         <div className={DetailPokemonStyles.catchModal.buttons.container}>
                             <button className={DetailPokemonStyles.catchModal.buttons.item} onClick={() => setIsCatch(false)}>Cancel</button>
                             <button className={DetailPokemonStyles.catchModal.buttons.item} onClick={() => catchPokemon({id: data.pokemon.id, name : data.pokemon.name, image : data.pokemon.sprites.front_default })}>Save</button>
                         </div>
                     </div> : null    
                 }
             </div>
            }
        </Layout>
    )
}

export default Pokemon