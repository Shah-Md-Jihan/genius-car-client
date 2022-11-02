import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className="hero my-24 w-full">
            <div className="hero-content grid gap-x-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="text-center lg:text-left w-3/4">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center my-5">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered rounded-none" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-600 rounded-none border-none text-white" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;