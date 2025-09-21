const validateForm = () => {
    console.log("Validate form")
    const formElement = document.querySelector("[data-js-form]")
    const emailFieldElement = document.querySelector("[data-js-form-emailField]")
    const errorMessageElement = document.querySelector("[data-js-errorMessage]")
    const errorDivElement = document.querySelector("[data-js-errorDiv]")

    const checkErrorOfField = () => {
        const error = emailFieldElement.validity
        const { valueMissing, tooLong, tooShort, patternMismatch } = error
        if ( valueMissing || tooLong || tooShort || patternMismatch ) {
            errorDivElement.classList.add("error")
            errorMessageElement.textContent = "Whoops, make sure it's an email"
            return false
        } 
        return true
    }

    formElement.addEventListener("submit", (event) => { 
        event.preventDefault()
        checkErrorOfField()

        const isValid = checkErrorOfField()

        if (isValid) {
            window.location.reload()
        }
    })

    emailFieldElement.addEventListener("focus", () => {
        errorDivElement.classList.remove("error")
        errorMessageElement.textContent = ""
    })

    emailFieldElement.addEventListener("blur", () => {
        checkErrorOfField()
    }) 
}

export default validateForm