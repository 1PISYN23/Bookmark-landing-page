import "./burger.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo-bookmark.svg"
import { ReactComponent as CloseSVG } from "@/assets/icons/icon-close.svg"
import { ReactComponent as FacebookSVG } from "@/assets/icons/icon-facebook.svg"
import { ReactComponent as TwitterSVG } from "@/assets/icons/icon-twitter.svg"

export default () => {
    return (
        <section className="burgerSection" data-js-burgerMenu>
            <div className="burgerSection__logoDiv">
                <LogoSVG className="burgerSection__logoDiv__logo"/>
                <button className="burgerSection__logoDiv__buttonClose" data-js-button-closeMenu><CloseSVG /></button>
            </div>

            <nav className="burgerSection__nav">
                <ul className="burgerSection__nav__list">
                    <li ><a href="" className="burgerSection__nav__list__item">FEATURES</a></li>
                    <li ><a href="" className="burgerSection__nav__list__item">PRICING</a></li>
                    <li ><a href="" className="burgerSection__nav__list__item">CONTACT</a></li>
                </ul>
                <button className="burgerSection__nav__button">LOGIN</button>
            </nav>

            <div className="burgerSection__socialsDiv">
                <button className="burgerSection__socialsDiv__facebook"><a href=""><FacebookSVG /></a></button>
                <button className="burgerSection__socialsDiv__twitter"><a href=""><TwitterSVG /></a></button>
            </div>
        </section>
    )
}