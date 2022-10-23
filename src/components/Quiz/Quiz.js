import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qustion from '../Qustion/Qustion';

const Quiz = () => {
    const quizs = useLoaderData().data;
    const { name, questions } = quizs;
    return (
        <div className='container'>
            <h2 className='my-5'>Quiz of {name}</h2>
            <div className="">
                {
                    questions.map(question => <Qustion key={question.id} question={question}></Qustion>)
                }
            </div>
        </div>
    );
};

export default Quiz;