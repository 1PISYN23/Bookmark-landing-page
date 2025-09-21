import "./headerSection.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo-bookmark.svg"
import { ReactComponent as BurgerSVG } from "@/assets/icons/icon-hamburger.svg"
import Burger from "@/components/Burger"

export default () => {
    return (
        <section className="headerSection">
            <LogoSVG />
            <article className="headerSection__article">
                <nav>
                    <ul className="headerSection__article__list">
                        <li><a href="" className="headerSection__article__list-item">FEATURES</a></li>
                        <li><a href="" className="headerSection__article__list-item">PRICING</a></li>
                        <li><a href="" className="headerSection__article__list-item">CONTACT</a></li>
                    </ul>
                    <button className="headerSection__article__buttonBurger" data-js-button-openMenu><BurgerSVG /></button>
                </nav>
                <Burger />
                <button className="headerSection__article__button">LOGIN</button>
            </article>
        </section>
    )
}