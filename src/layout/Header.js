import {useLocation, useHistory} from 'react-router-dom'
import LayoutStyle from '../styles/layout'
import {ReactComponent as Logo} from '../assets/images/logo.svg'

const Header = () => {
    const {container, menu,content, wave} = LayoutStyle.header
    const location = useLocation()
    const history = useHistory()

    const isMyPokemonPage = location.pathname.split('/')[1] === 'my-pokemon'

    return (    
        <section className={container}>
            <div className={menu.container}>
                <button className={menu.button} onClick={() => {
                    if(isMyPokemonPage){
                        history.goBack()
                    }else{
                        history.push('/my-pokemon')
                    }
                }}>
                  {isMyPokemonPage ? 'Back' : 'My pokemon'}
                </button>
            </div>
            <div className={content.layout}>
                <Logo />
                <h1 className={content.title}>The Pokemon App using PokeAPI</h1>
            </div>
            <div className={`${wave.waveWrapper}`}>
                <div className={`${wave.waveWrapperInner} ${wave.bgTop}`}>
                    <div className={`${wave.wave} ${wave.waveTop}`}></div>
                </div>
                <div className={`${wave.waveWrapperInner} ${wave.bgMiddle}`}>
                    <div className={`${wave.wave} ${wave.waveMiddle}`}></div>
                </div>
                <div className={`${wave.waveWrapperInner} ${wave.bgBottom}`}>
                    <div className={`${wave.wave} ${wave.waveBottom}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Header