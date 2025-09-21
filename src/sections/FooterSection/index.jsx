import "./footerSection.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo-bookmark.svg"
import { ReactComponent as FacebookSVG } from "@/assets/icons/icon-facebook.svg"
import { ReactComponent as TwitterSVG } from "@/assets/icons/icon-twitter.svg"

export default () => {
    return (
        <section className="footerSection">
            <div className="footerSection__divNav">
                <LogoSVG className="logo"/>
                <nav>
                    <ul className="footerSection__divNav__nav">
                        <li><a href="" className="footerSection__divNav__nav__item">FEATUES</a></li>
                        <li><a href="" className="footerSection__divNav__nav__item">PRICING</a></li>
                        <li><a href="" className="footerSection__divNav__nav__item">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footerSection__divButtons">
                <button className="footerSection__divButtons__item"><a href=""><FacebookSVG className="test"/></a></button>
                <button className="footerSection__divButtons__item"><a href=""><TwitterSVG /></a></button>
            </div>
        </section>
    )
}