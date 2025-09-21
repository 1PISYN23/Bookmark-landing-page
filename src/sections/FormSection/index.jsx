import "./form.scss"

export default () => {
    return (
        <section className="formSection">
            <p className="formSection__text">35,000+ ALREADY JOINED</p>
            <h6 className="formSection__title">Stay up-to-date with what<br/>
                we’re doing</h6>
            <form action="" className="formSection__form" data-js-form noValidate>
                <div className="formSection__form__errorDiv" data-js-errorDiv>
                    <input type="email" 
                        placeholder="Enter your email address" 
                        className="formSection__form__inputEmail"
                        minLength={12}
                        maxLength={28}
                        data-js-form-emailField
                        required
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        aria-errormessage="errorMessage"
                        />
                    <span id="errorMessage" className="formSection__form__errorDiv__error"><em data-js-errorMessage></em></span>
                </div>
                <button type="submit" className="formSection__form__buttonSubmit">Contact Us</button>
            </form>
        </section>
    )
}