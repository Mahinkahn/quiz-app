import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { id,logo, name, total } = props.category;
    return (
        <div class="col">
            <div class="card p-3">
                <img src={logo} class="card-img-top bg-secondary rounded" alt="logo" />
                <div class="card-body">
                    <h5 class="card-title fw-bold fs-3">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <p>Total Quiz: <span className="fw-bold fs-5">{total}</span></p>
                        <Link to={`../quiz/${id}`} className='btn btn-primary'>Quiz Start</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;