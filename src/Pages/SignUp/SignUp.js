import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
        form.reset();
    }
    return (
        <div className="hero my-24 w-full">
            <div className="hero-content grid gap-x-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="text-center lg:text-left w-3/4">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
                    <h1 className="text-3xl font-bold text-center my-5">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-600 rounded-none border-none text-white" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car? Please <Link to="/login" className='text-orange-600 font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;