const openAnswer = () => {
    console.log("Open anser")
    const buttonOpenAnswerElement = document.querySelectorAll("[data-js-buttonOpen-answer]")
    const arrowButtonElement = document.querySelectorAll("[data-js-arrowDown]")

    let arrow = []

    arrowButtonElement.forEach((element) => {
        arrow.push(element)
    })

    buttonOpenAnswerElement.forEach((button, index) => {
        const answer = document.getElementById(button.getAttribute("aria-controls"))
        button.addEventListener("click", () => {
            answer.classList.toggle("activeAnswer")  
            arrowButtonElement[index].classList.toggle("active")
        })
   })
}

export default openAnswer