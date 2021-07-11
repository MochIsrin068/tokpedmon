
import {css} from '@emotion/css'

export default class Home {
    static container = css({
        display :'grid',
        gridTemplateColumns : 'repeat(auto-fill, minmax(250px, 1fr))',
        padding : '16px 64px',
        gap : 30,
        
        '@media only screen and (max-width: 599px)' : {
            padding : '32px',
        }
    })

    static pagination = {
        container : css({
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            marginTop : 10,
            padding : '16px 0',
            marginBottom : 80
        }),

        button : css({
            margin : '0 10px',
            color : '#E769AD',
            cursor : 'pointer',
            borderRadius : 10,
            border : '1px solid #E769AD',
            background : "#fff",
            padding : '8px 16px',
            fontWeight : "bold",
            width : 100,
            '&:hover' : {
                background : '#E769AD',
                color  : '#fff',
            }
        }),
    }
}