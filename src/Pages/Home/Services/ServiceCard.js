import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-2xl font-bold'>{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;