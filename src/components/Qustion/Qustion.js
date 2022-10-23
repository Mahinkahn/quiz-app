import { Alert } from 'bootstrap';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Qustion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Qustion = (props) => {
    const { question, options, correctAnswer } = props.question;
    let error = 0;
    let right = 0;
    const clickoption = (isCarrect) => {
        if (isCarrect === correctAnswer) {
            toast.success("Your Answer is Correct Answer", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });
            error = error + 1;

        }
        else {
            toast.error("Your Answer is Wrong Answer", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });
            right = right + 1;
        }
    }
    const showCorrectAnswer = (props) => {
        toast.success(`Your CorrectAnswer is : ${props}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className='bg-primary my-4 p-5 rounded'>
            <ToastContainer />
            <h3 className='text-white'>
                {question.slice(3, -4)}
            </h3>
            <button onClick={() => showCorrectAnswer(correctAnswer)}
                className='bg-primary text-white border border-0 my-4 fs-3'>
                <FontAwesomeIcon icon={faEye} />
            </button>

            <div className="option-btns">
                {
                    options.map(option =>
                        <button onClick={() => clickoption(option)}
                            className="py-2 px-5 border border-none rounded ">
                            {option}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Qustion;