import "./main.scss"
import FeaturesSection from "@/sections/FeaturesSection"
import BookmarkManagerSection from "@/sections/BookmarkManagerSection"
import BrowsersSection from "@/sections/browsersSection"
import QuestionsSection from "@/sections/QuestionsSection"
import FormSection from "@/sections/FormSection"

export default () => {
    return (
        <main>
            <BookmarkManagerSection />
            <FeaturesSection />
            <BrowsersSection />
            <QuestionsSection />
            <FormSection />
        </main>
    )
}