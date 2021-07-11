import {useContext} from 'react'
import {css} from '@emotion/css'
import {useHistory} from 'react-router-dom'

import Layout from '../../layout'
import {PokemonContext} from '../../context/PokemonContext'
import homeStyle from '../../styles/pages/Home'

const MyPokemon = () => {
    const pokemonContext = useContext(PokemonContext)
    const history = useHistory()

    const releasePokemon = (nickname) => {
        pokemonContext.setMyPokemon(pokemonContext.myPokemon.filter((item) => item.nickname !== nickname))
      }
    
    return (
        <Layout>
            {pokemonContext.myPokemon.length === 0 ?
                <div className={styles.emptyState}>
                    <h3>You don't have pokemon !</h3>
                    <button className={styles.buttonBack} onClick={() => history.push('/')}>Back to home</button>
                </div>
            : null}
            <div className={homeStyle.container}>
                {pokemonContext.myPokemon.map((pokemon,index) => {
                    return (
                        <div key={pokemon.id} className={styles.card}>
                            <img src={pokemon.image} alt="" className={styles.image}/>
                            <h3 className={styles.title}>{pokemon.name}</h3>
                            <h5 className={styles.title}>Nickname : {pokemon.nickname}</h5>
                            <button className={styles.button} onClick={() => releasePokemon(pokemon.nickname)}>Release</button>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

const styles = {
    card : css({
        WebkitBoxShadow : '0 0 24px -10px hsl(0deg 0% 49% / 69%)',
        borderRadius : 10,
        padding : 16,
        '&:hover' : {
            WebkitBoxShadow : '0 0 28px -6px hsl(0deg 0% 49% / 69%)',
            border : '2px solid #E769AD',
            padding : 14,
        },

        '@media only screen and (max-width: 599px)' : {
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center"
        }
    }),

    image : css({
        background : "#f2f2f2",
        width : 100,
        height : 100,
        borderRadius : 10,

        '@media only screen and (max-width: 599px)' : {
            width : 200,
            height : 200,
        }
    }),

    title : css({
        borderBottom : '2px solid #E769AD',
        marginBottom : 10,
        paddingBottom : 6,
        textAlign : "center",
        marginTop : 10
    }),

    button : css({
        padding : '10px 16px',
        textAlign : "center",
        border : '1px solid #fff',
        background : "#ff5270",
        color : '#fff',
        borderRadius : 10,
        fontWeight : "bold",
        fontSize : 16,
        cursor : "pointer",
        width : '100%',
        "&:hover":{
            border : '1px solid #E769AD',
        }
    }) ,

    buttonBack : css({
        padding : '10px 16px',
        textAlign : "center",
        border : '1px solid #fff',
        background : "#ff5270",
        color : '#fff',
        borderRadius : 10,
        fontWeight : "bold",
        fontSize : 16,
        cursor : "pointer",
        marginTop : 10,
        "&:hover":{
            border : '1px solid #E769AD',
        }
    }) ,

    emptyState : css({
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column"
    })
}



export default MyPokemon