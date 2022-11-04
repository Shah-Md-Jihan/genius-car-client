import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h1 className='text-5xl font-semibold my-5'>Our Service Area</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service =>
                    <ServiceCard
                        key={service._id}
                        service={service}>
                    </ServiceCard>)}
            </div>
            <div className='flex justify-center my-12'>
                <button className="btn btn-outline rounded-none text-orange-600">More Services</button>
            </div>
        </div>
    );
};

export default Services;