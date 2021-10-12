import React, { Component } from 'react';
import './Assessment.css';
import {QuizData} from '../../QuizData'
import Banner from './Banner';


export default class Assessment extends Component {

    state = {
        userAnswer:null,    //current users answer
        currentIndex:0,  //current questions index
        options: [],       //the four options
        quizEnd: false, //True if it's the last question
        score: 0,      //the Score
        disabled: true,
    }

            //Component that holds the current quiz
        loadQuiz = () => {
            const {currentIndex} = this.state //get the current index
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer          
                }
            }
            )
        }

                //Handles Click event for the next button
        nextQuestionHander = () => {
            const {userAnswer, answer, score} = this.state
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })

            //Check for correct answer and increment score
            if(userAnswer === answer){
                this.setState({
                    score: score + 1
                })
            }
        }

                //Load the quiz once the component mounts
        componentDidMount(){
            this.loadQuiz();
        }

                //Update the component
        componentDidUpdate(prevProps, prevState){
            const{currentIndex} = this.state;
            if(this.state.currentIndex !== prevState.currentIndex){
                this.setState(() => {
                    return {
                        disabled: true,
                        question: QuizData[currentIndex].question,
                        options : QuizData[currentIndex].options,
                        answer: QuizData[currentIndex].answer          
                    }
                });

            }
        }

                //Check the answer
        checkAnswer = answer => {
            this.setState({
                userAnswer: answer,
                disabled:false
            })
        }

                //Responds to the click of the finish button
        finishHandler =() => {
            if(this.state.currentIndex === QuizData.length -1){
                this.setState({
                    quizEnd:true
                })
            }

        }



    render() {
        const {question,options,currentIndex,userAnswer,quizEnd}=this.state

        if(quizEnd){
            return (
                <>
                <div className="flex">
                <div className="assessment">
                    <div className="nav2">
                        TEST SUMMARY
                    </div>
                    <div className="ques">
                        <p className="text">No. of Question</p>
                        <p className="num">{QuizData.length}</p>
                    </div>

                    <div className="correct">
                        <p className="text">Correct</p>
                        <p className="num">{this.state.score}</p>
                    </div>

                    <div className="incorrect">
                        <p className="text">Incorrect</p>
                        <p className="num">{QuizData.length - this.state.score}</p>
                    </div>

                    <div className="total">
                       <h4 className="text"> Total Score</h4>
                        <p className="num">
                            {this.state.score}/{QuizData.length}
                        </p>
                    </div>
                </div>
                </div>
                <Banner />
                </>

            )
        }

        return (
            <>
             <Banner/>
             <div className="flex">
            <div className="assessment">
                <div className="nav">
                    {`Question: ${currentIndex + 1}/${QuizData.length} ` }
                </div>
                <div className="question">
                    <h2>{`${currentIndex + 1}.${question}`}</h2>
                    {
                        options.map(option=>
                            <p key={option.id} className={`options ${userAnswer ===option? "selected":null}`}
                            onClick ={()=>this.checkAnswer(option)}
                            >
                                {option}

                            </p>
                            )
                    }
        
                    {currentIndex < QuizData.length - 1 &&
                    <button className="next" disabled={this.state.disabled} onClick={this.nextQuestionHander}>
                        SAVE &amp; NEXT
                    </button>}

                    {currentIndex===QuizData.length-1 &&
                        <button className="submit" onClick={this.finishHandler}>
                            SUBMIT
                        </button>
                    }


                </div>


                
            </div>
            </div>
            </>
        )
    }
}

