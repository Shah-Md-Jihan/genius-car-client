import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
    const { service_name, customer, price, service, phone } = order;
    const [orderService, setService] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service]);
    return (
        <tr>
            <th>
                <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_name}</div>
                    </div>
                </div>
            </td>

            <td>{customer}</td>
            <td>{price}</td>
        </tr>
    );
};

export default OrderRow;