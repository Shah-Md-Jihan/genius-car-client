import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);
    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.vaule;
        const email = user?.email || 'unregister';
        const message = form.message.value;

        const order = {
            service: _id,
            service_name: title,
            price,
            customer: name,
            email,
            phone,
            message
        }



        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order Placed');
                    form.reset();
                }
            })
            .then(error => console.error(error))
    }

    return (
        <form onSubmit={handlePlaceOrder} className='p-24'>
            <div>
                <h1 className='text-3xl font-semibold pb-3'>You are about to order: {title}</h1>
                <h4 className='text-2xl font-semibold pb-3'>Price: ${price}</h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <input name="firstName" type="text" placeholder="First name" className="input input-bordered input-secondary w-full rounded-lg" />
                <input name="lastName" type="text" placeholder="Last name" className="input input-bordered input-secondary w-full rounded-lg" />
                <input name="phone" type="text" placeholder="Your phone" className="input input-bordered input-secondary w-full rounded-lg" />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-secondary w-full rounded-lg" />
            </div>
            <div className='grid grid-flow-col-1 gap-10 mt-10'>
                <textarea name="message" className="textarea textarea-secondary w-full rounded-lg h-48" placeholder="Your Note..."></textarea>
                <input type="submit" placeholder="Your phone" className="input input-bordered input-secondary w-full rounded-lg btn bg-orange-600 text-white" value="Place Order" />
            </div>
        </form>
    );
};

export default CheckOut;