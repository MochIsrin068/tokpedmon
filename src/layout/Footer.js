import LayoutStyle from '../styles/layout'
import WaveFooter from "./components/WaveFooter"

const Footer = () => {
    const {footer} = LayoutStyle
    return (
        <section className={footer.container}>
            <WaveFooter />
            <p className={footer.text}>&copy; Muhammad Isrin 2021</p>
        </section>
    )
}

export default Footer