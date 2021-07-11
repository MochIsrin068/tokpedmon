import {useLocation} from 'react-router-dom'
import LayoutStyle from '../styles/layout'
import Header from './Header'
import Footer from './Footer'

const Layout =  ({children}) => {
    const location = useLocation()
    const isMyPokemonPage = location.pathname.split('/')[1] === 'my-pokemon'
    const isDetailPokemonPage = location.pathname.split('/')[1] === 'pokemon'

    return (
        <main className={LayoutStyle.layout}>
            <Header />
            {children}
            {isMyPokemonPage || isDetailPokemonPage ? null : <Footer />}
        </main>
    )
}

export default Layout