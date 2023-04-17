import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error,setError]=useState('');
    const handleFormSignUpSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirm.value
        console.log(email,password,confirmPassword);

        if(password != confirmPassword){
            setError('password did not matched!')
            return
        }

      }

        return (
            <div className=" min-h-screen bg-base-200 grid place-items-center">
                <div className="">

                <h1 className="text-5xl font-bold text-center py-12">Register now! </h1>
              <form onSubmit={handleFormSignUpSubmit} className="card  w-[400px] shadow-2xl bg-base-100">
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
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" required/>
                  </div>

                  </div>
                  <div className="form-control mt-6 ">
                    <button className="px-7 py-3 bg-yellow-500/50 rounded  hover:bg-amber-500 font-bold">Sign Up</button>
                  </div>
                  <div>
                    <small>already have an account <Link className="text-amber-500" to="/login">Please Login</Link></small>
                  </div>
                  <div className="form-control mt-6">
                    <button className="border rounded-lg border-black px-7 py-3">continue with google</button>
                  </div>
                </div>
              </form>
                    <small className="text-red-500">
                        {error}
                    </small>
                </div>
            </div>

        );
};

export default SignUp;