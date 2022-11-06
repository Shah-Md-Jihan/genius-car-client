import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-gamma-five.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    logOut();
                }
                return res.json();
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are sure to cancle this order?');
        if (proceed) {
            fetch(`https://genius-car-server-gamma-five.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders?.filter(odr => odr?._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-gamma-five.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(ord => ord._id !== id);
                    const approving = orders.find(ord => ord._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl py-12'>You have {orders.length} oreder items.</h2>
            <div className="overflow-x-auto pb-12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service</th>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order?._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;