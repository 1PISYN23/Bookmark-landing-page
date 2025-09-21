import "./featuresSeciton.scss"
import { ReactComponent as FeaturesTabSVG } from "@/assets/icons/illustration-features-tab-1.svg"
import { Image } from "minista"

export default () => {
    return (
        <section className="featureSection">
            <article className="featureSection__featuresArticle">
                <h2 className="featureSection__featuresArticle__title">Features</h2>
                <p className="featureSection__featuresArticle__text">Our aim is to make it quick and easy for you to access your<br className="featureSection__br"/>
                    favourite websites. Your bookmarks sync between your devices<br className="featureSection__br"/>
                    so you can access them on the go.</p>
            </article>

            <article className="featureSection__buttonsArticle">
                <button className="featureSection__buttonsArticle__item" data-js-featureButton>Simple Bookmarking</button>
                <button className="featureSection__buttonsArticle__item" data-js-featureButton>Speedy Searching</button>
                <button className="featureSection__buttonsArticle__item" data-js-featureButton>Easy Sharing</button>
            </article>

            <article className="featureSection__bookmarkArticle">
                <div className="featureSection__bookmarkArticle__div"></div>
                {/* <FeaturesTabSVG className="featureSection__bookmarkArticle__image"/> */}
                <Image src="/src/assets/icons/illustration-features-tab-1.svg" className="featureSection__bookmarkArticle__image" data-js-tab-illustration/>
                <article className="featureSection__bookmarkArticle__article">
                    <h2 className="featureSection__bookmarkArticle__article__title" data-js-featureTitle>Bookmark in one click</h2>
                    <p className="featureSection__bookmarkArticle__article__text" data-js-featureText>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button className="featureSection__bookmarkArticle__article__button">More Info</button>
                </article>
            </article>
        </section>
    )
}