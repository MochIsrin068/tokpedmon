
import {css} from '@emotion/css'

export default class DetailPokemon {
    static container = css({
        WebkitBoxShadow : '0 0 24px -10px hsl(0deg 0% 49% / 69%)',
        background : "#fff",
        padding : 16,
        borderRadius : 10,
        display : "flex",
        justifyContent : "space-between",
        width : '46%',
        position : 'absolute',
        top : 220,
        left : '26%',
        zIndex : 100,
        paddingBottom : 32,
        
        '@media only screen and (max-width: 599px)' : {
            flexDirection : "column",
            width : '80%',
            left : '6%',
            paddingBottom : 50,
            marginBottom : 50
        }
    })

    static button = css({
        position : "absolute",
        bottom : -20,
        left : '46%',
        padding : '10px 16px',
        textAlign : "center",
        border : '1px solid #fff',
        background : "#ff5270",
        color : '#fff',
        borderRadius : 10,
        fontWeight : "bold",
        fontSize : 16,
        cursor : "pointer",
        "&:hover":{
            border : '1px solid #E769AD',
        },
        
        '@media only screen and (max-width: 599px)' : {
            left : '0',
            bottom : 8,
            width : '100%'
        }
    }) 

    static catchModal = {
        container : css({
            WebkitBoxShadow : '0 0 24px -10px hsl(0deg 0% 49% / 69%)',
            borderRadius : 10,
            background : "#fff",
            padding : 20,
            position : "absolute",
            top : 30,
            left : "14%",
            width : 500,
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column",
            
            '@media only screen and (max-width: 599px)' : {
                width : 290,
                left : "0",
            }
        }),
        title : css({
            textAlign : "center"
        }),
        input : css({
            border : '1px solid #E769AD',
            width : "90%",
            marginTop : 10,
            borderRadius : 10,
            padding : 10,
            '&:focus' : {
                border : '1px solid #E769AD',
            }
        }),
        buttons : {
            container : css({
                display : "flex",
                alignItems : "center",
                justifyContent : "space-between",
                marginTop : 10,

                '@media only screen and (max-width: 599px)' : {
                    flexDirection : "column",
                    width : "100%"
                }
            }),
            item : css({
                color : "#fff",
                background : "#E769AD",
                padding : 10,
                margin : '0 10px',
                borderRadius : 10,
                '&:hover' : {
                    background : "#ff5270",
                },

                '@media only screen and (max-width: 599px)' : {
                    margin : '10px 0',
                    width : "100%"
                }
            }),
        },
    }

    static baseInfo = {
        container : css({   
            display : "flex",
            flexDirection : "column",
        }),

        image : css({
            background : "#f2f2f2",
            width : 200,
            height : 200,
            borderRadius : 10,

            '@media only screen and (max-width: 599px)' : {
                width : 300,
                height : 300,
            }
        }),

        title : css({
            borderBottom : '2px solid #E769AD',
            marginBottom : 10,
            paddingBottom : 6,
            marginTop : 10,
        }),

        moves : {
            container : css({
                display : "flex",
            }),
            
            chip : css({
                margin : 6,
                background : '#E769AD',
                color  : '#fff',
                padding : 8,
                borderRadius : 16,
                fontSize : 10,
            })        
        }
    
    
    }

    static statsInfo = {
        container : css({
            // background : "#ddd",
            padding : 10,
            borderRadius : 10,
            border : '1px solid #ddd'
        }),

        types : {
            container : css({
                marginBottom : 10
            }),

            title : css({
                marginBottom : 10,
                borderBottom : '2px solid #E769AD',
                paddingBottom : 6
            }),

            chips : {
                container : css({
                    display : "flex",
                    alignItems : "center",
                }),
                item : css({
                    border : '2px solid #E769AD',
                    color : '#E769AD',
                    padding : 8,
                    borderRadius : 10,
                    marginRight : 8,
                    textAlign: "center",
                    fontsize : 10
                })
            
            }
        
        },

        stats : {
            container : css({
            }),
            
            title : css({
                marginBottom : 10,
                borderBottom : '2px solid #E769AD',
                paddingBottom : 6
            }),

            progress : {
                container : css({
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "space-between",
                    marginBottom : 6,
                    height : 40
                }),

                title : css({
                    marginRight : 10,
                    fontSize : 14
                })
            
            }
        }
    
    }
}