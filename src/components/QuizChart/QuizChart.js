import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import './QuizChart.css';

const QuizChart = () => {
    const quizs = useLoaderData().data;
    // console.log(quizs);
    return (
        <div className=' m-auto my-5'>
            <h2 className='my-5'>Total Quiz</h2>
            <ResponsiveContainer width="90%" aspect={4}>
                <LineChart data={quizs} >
                    <CartesianGrid />
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke='blue'></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default QuizChart;