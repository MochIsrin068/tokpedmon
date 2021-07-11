import {css} from '@emotion/css'

export default class PokemonCard {
    static container = css({
        WebkitBoxShadow : '0 0 24px -10px hsl(0deg 0% 49% / 69%)',
        borderRadius : 10,
        padding : 16,
        cursor : "pointer",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column",
        
        '&:hover' : {
            WebkitBoxShadow : '0 0 28px -6px hsl(0deg 0% 49% / 69%)',
            border : '2px solid #E769AD',
            padding : 14,
        }
    })

    static image = css({
        background : "#f2f2f2",
        width : 100,
        height : 100,
        borderRadius : 10,
    })

    static title = css({
        borderBottom : '2px solid #E769AD',
        marginBottom : 10,
        paddingBottom : 6,
        textAlign : "center",
        marginTop : 10
    })
}