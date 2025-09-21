import "./questions.scss"
import { ReactComponent as ArrowSVG } from "@/assets/icons/icon-arrow.svg"

export default () => {
    return (
        <section className="question">
            <article className="question__articleTitle">
                <h5 className="question__articleTitle__title">Frequently Asked Questions</h5>
                <p className="question__articleTitle__text">Here are some of our FAQs. If you have any other questions<br className="question__br"/>
                    you’d like answered please feel free to email us.</p>
            </article>
            <article className="question__articleQuestions">
                <div className="blockQuestions">
                    <div className="blockQuestions__div">
                        <button className="blockQuestions__itemDiv" aria-controls="a1" data-js-buttonOpen-answer>
                            <p className="blockQuestions__itemDiv__text">What is Bookmark?</p>
                            <ArrowSVG className="blockQuestions__itemDiv__button" data-js-arrowDown/>
                        </button>

                        <div className="blockQuestions__answer" id="a1" data-js-answer> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                            </p>
                        </div>
                    </div>


                    <div className="blockQuestions__div">
                        <button className="blockQuestions__itemDiv" aria-controls="a2" data-js-buttonOpen-answer> 
                            <p className="blockQuestions__itemDiv__text">How can I request a new browser?</p>
                            <ArrowSVG className="blockQuestions__itemDiv__button" data-js-arrowDown/>
                        </button>

                        <div className="blockQuestions__answer" id="a2" data-js-answer>
                            <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            </p>
                        </div>
                    </div>


                    <div className="blockQuestions__div">
                        <button className="blockQuestions__itemDiv" aria-controls="a3" data-js-buttonOpen-answer>
                            <p className="blockQuestions__itemDiv__text">Is there a msobile app?</p>
                            <ArrowSVG className="blockQuestions__itemDiv__button" data-js-arrowDown/>
                        </button>

                        <div className="blockQuestions__answer" id="a3" data-js-answer>
                            <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
    sollicitudin ex et ultricies bibendum.</p>
                        </div>
                    </div>

                    <div className="blockQuestions__div">
                        <button className="blockQuestions__itemDiv" aria-controls="a4" data-js-buttonOpen-answer>
                            <p className="blockQuestions__itemDiv__text">What about other Chromium browsers?</p>
                            <ArrowSVG className="blockQuestions__itemDiv__button" data-js-arrowDown/>
                        </button>

                        <div className="blockQuestions__answer" id="a4" data-js-answer>
                            <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
    vitae neque eget nisl gravida pellentesque non ut velit.</p>
                        </div>
                    </div>
                </div>
                <button className="question__articleQuestions__button">More Info</button>
            </article>
        </section>
    )
}