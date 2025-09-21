const initBurgerMenu = () => {
    const buttonOpenBurgerElement = document.querySelector("[data-js-button-openMenu]")
    const buttonCloseBurgerElement = document.querySelector("[data-js-button-closeMenu]")
    const burgerMenuElement = document.querySelector("[data-js-burgerMenu]")

    // console.log(burgerMenuElement)

    buttonOpenBurgerElement.addEventListener("click", () => {
        burgerMenuElement.classList.add("active")
    })

    buttonCloseBurgerElement.addEventListener("click", () => {
        burgerMenuElement.classList.remove("active")
    })
}

export default initBurgerMenu