import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';


const Home = () => {
    const categorys = useLoaderData();
    return (
        <div className="container">
            <div className="baner">
                <img className='h-25 w-100 rounded-5 mt-4' src="https://miro.medium.com/max/1400/1*OjnZjw20cnBWVs4E_a3u4A.png" alt="" srcset="" />
            </div>
            <div className='row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4 my-5'>
                {
                    categorys.data.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Home;