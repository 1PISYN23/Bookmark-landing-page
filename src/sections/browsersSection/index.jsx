import "./browsers.scss"
import BrowserCard from "@/components/BrowserCard"
import { ReactComponent as ChromeSVG } from "@/assets/icons/logo-chrome.svg"
import { ReactComponent as FirefoxSVG } from "@/assets/icons/logo-firefox.svg"
import { ReactComponent as OperaSVG } from "@/assets/icons/logo-opera.svg"
import { ReactComponent as DotsSVG } from "@/assets/icons/bg-dots.svg"

export default () => {
    return (
        <section className="browserSection">
            <article className="browserSection__article">
                <h3 className="browserSection__article__title">Download the extension</h3>
                <p className="browserSection__article__text">We’ve got more browsers in the pipeline. Please do let us know if<br className="browserSection__br"/>
                    you’ve got a favourite you’d like us to prioritize.</p>
            </article>
            <article className="browserSection__articleCards">
                <article className="browsers">
                    <ChromeSVG />
                    <div className="browsers__div">
                        <h4 className="browsers__div__title">Add to Chrome</h4>
                        <p className="browsers__div__text">Minimum version 62</p>
                    </div>
                    <DotsSVG />
                    <button className="browsers__button">Add & Install Extension</button>
                </article>

                <article className="browsers">
                    <FirefoxSVG />
                    <div className="browsers__div">
                        <h4 className="browsers__div__title">Add to Firefox</h4>
                        <p className="browsers__div__text">Minimum version 55</p>
                    </div>
                    <DotsSVG />
                    <button className="browsers__button">Add & Install Extension</button>
                </article>

                <article className="browsers">
                    <OperaSVG />
                    <div className="browsers__div">
                        <h4 className="browsers__div__title">Add to Opera</h4>
                        <p className="browsers__div__text">Minimum version 46</p>
                    </div>
                    <DotsSVG />
                    <button className="browsers__button">Add & Install Extension</button>
                </article>
            </article>
        </section>
    )
}