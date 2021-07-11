
import { css, keyframes } from '@emotion/css'


const move_wave = keyframes`
0% {
    transform: translateX(0) translateZ(0) scaleY(1)
}
50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55)
}
100% {
    transform: translateX(-50%) translateZ(0) scaleY(1)
}
`

export default class LayoutStyle {
    static layout = css({
        // backgroundColor : '#ddd',
    })

    static header = {
        container : css({
            background : 'linear-gradient(100deg, #C28AE4, #E769AD, #F26583)',
            height  : 342,
            padding : '16px 0',
            display : "flex",
            flexDirection : "column",
            marginBottom : 20
        }),

        menu : {
            container : css({
                display : "flex",
                alignItems : "center",
                justifyContent : "flex-end",
                padding : 16,
                marginBottom : 10
            }),

            button : css({
                cursor : "pointer",
                borderRadius : 10,
                border : '1px solid #fff',
                background : "pink",
                padding : 9,
                color : '#fff',
                '&:hover' :{
                    border : '1px solid #fff',
                    background : "#ff5270",
                    color : '#fff'
                }
            }),
        },

        content : {
            layout : css({
                display : "flex",
                alignItems : "center",
                flexDirection : "column",
                justifyContent : "center",
            }),

            title : css({
                color : "#fff",
                marginTop : 10,
                textAlign : "center",
            }),
        },

        wave : {
            waveWrapper : css({
                marginTop : -10,
                '@media only screen and (max-width: 599px)' : {
                    marginTop : -50,
                }
            }),
            waveWrapperInner : css({
                position: 'absolute',
                width: '100%',
                overflow: "hidden",
                height: '18%',
            }),
            bgTop : css({
                zIndex: 15,
                opacity: 0.5,
            }),
            bgMiddle : css({
                zIndex: 10,
                opacity: 0.75
            }),
            bgBottom : css({
                zIndex : 5,
            }),
            wave : css({
                position: "absolute",
                left: 0,
                width: '200%',
                height: '100%',
                backgroundRepeat: 'repeat no-repeat',
                backgroundPosition: '0 bottom',
                transformOrigin: 'center bottom',
            }),
            waveTop : css({
                backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
                backgroundSize: '50% 100px',
                animation: `${move_wave} 3s`,
                WebkitAnimation: `${move_wave} 3s`,
                WebkitAnimationDelay: '1s',
                animationDelay: '1s',
            }),
            waveMiddle : css({
                backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
                backgroundSize: "50% 120px",
                animation: `${move_wave} 10s linear infinite`,
            }),
            waveBottom : css({
                backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
                backgroundSize: '50% 100px',
                animation: `${move_wave} 15s linear infinite`,
            }),
        }
    }

    static footer = {
        container : css({
            height : 100,
            marginTop : -90,
            padding : 0,
            marginBottom : 0,
            '@media only screen and (max-width: 599px)' : {
                marginTop : 0,
                height : "0"
            }
        }),

        text : css({
            color : '#fff',
            textAlign : "center",
            marginTop : -80,
            fontWeight : "bold",
            
            '@media only screen and (max-width: 599px)' : {
                marginTop : -34,
            }
        }) 
    }
}