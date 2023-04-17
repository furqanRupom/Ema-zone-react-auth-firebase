import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Login = () => {

  // form submit
  const handleFormLoginSubmit = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
  }

    return (
        <div className=" min-h-screen bg-base-200 grid place-items-center">
            <div className="">

            <h1 className="text-5xl font-bold text-center py-12">Login now! </h1>
          <form onSubmit={handleFormLoginSubmit} className="card  w-[400px] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="px-7 py-3 bg-yellow-500/50 rounded  hover:bg-amber-500 font-bold">Login</button>
              </div>
              <div>
                    <small>new to EmaZone ?<Link className="text-amber-500" to="/signUp">create a New Account</Link></small>
                  </div>
              <div className="form-control mt-6">
                <button className="border rounded-lg border-black px-7 py-3">continue with google</button>
              </div>
            </div>
          </form>

            </div>
        </div>

    );
};

export default Login;