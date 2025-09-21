import "./managerSection.scss"
import { ReactComponent as IllustrationSVG } from "@/assets/icons/illustration-hero.svg"

export default () => {
    return (
        <section className="managerSection">
            <article className="managerSection__article">
                <h1 className="managerSection__article__title">A Simple Bookmark<br/>Manager</h1>
                <p className="managerSection__article__text">A clean and simple interface to organize your favourite<br className="managerSection__br"/>
                    websites. Open a new browser tab and see your sites load<br className="managerSection__br"/>
                    instantly. Try it for free.</p>
                <div className="managerSection__article__div">
                    <button className="managerSection__article__div-chromeButton">Get it on Chrome</button>
                    <button className="managerSection__article__div-firefoxButton">Get it on Firefox</button>
                </div>
            </article>

            <IllustrationSVG className="managerSection__illustration"/>

            <div className="managerSection__div"></div>
        </section>
    )
}