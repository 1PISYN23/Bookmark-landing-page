import img1 from "../assets/icons/illustration-features-tab-1.svg"
import img2 from "../assets/icons/illustration-features-tab-1.svg"
import img3 from "../assets/icons/illustration-features-tab-1.svg"

const scrollButtons = () => {
    console.log("Scroll buttons")

    const featuresButtonElements = document.querySelectorAll("[data-js-featureButton]")
    const tabImageElement = document.querySelector("[data-js-tab-illustration]")
    const titleElement = document.querySelector("[data-js-featureTitle]")
    const textElement = document.querySelector("[data-js-featureText]")
    
    let buttons = []
    
    const infoTab = [
        {   
            image: "/public/images/illustration-features-tab-1.svg", 
            title: "Bookmark in one click", 
            text: "Organize your bookmarks however you like. Oursimple drag-and-drop interface gives you completecontrol over how you manage your favourite sites."
        },
        { 
            image: "/public/images/illustration-features-tab-2.svg", 
            title: "Intelligent search", 
            text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        { 
            image: "/public/images/illustration-features-tab-3.svg", 
            title: "Share your bookmarks", 
            text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        },
    ]

    featuresButtonElements.forEach((elem) => {
        buttons.push(elem)
    })

    const setActiveButton = (activeButton) => {
        buttons.forEach((button) => {
            button.classList.remove("active", "activeText")
        })

        activeButton.classList.add("active", "activeText")
    }

    setActiveButton(buttons[0])

    const updateInfoTab = (index) => {
        // tabImageElement.src = infoTab[index].image
        // titleElement.textContent = infoTab[index].title
        // textElement.textContent = infoTab[index].text
        tabImageElement.classList.add("active")
        // titleElement.classList.add("active")
        // textElement.classList.add("active")

        setTimeout(() => {
            tabImageElement.classList.remove("active")
            titleElement.classList.remove("active")
            textElement.classList.remove("active")
            tabImageElement.src = infoTab[index].image
            tabImageElement.srcset = infoTab[index].image
            titleElement.textContent = infoTab[index].title
            textElement.textContent = infoTab[index].text
        }, 500)
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            setActiveButton(button)
            updateInfoTab(index)
        })
    })


}

export default scrollButtons
