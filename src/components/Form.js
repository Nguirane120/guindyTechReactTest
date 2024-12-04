import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <section className="h-100 bg-dark">
            <div className="container py-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row ">
                                <div className="col-xl-6 d-none d-xl-block position-relative">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample"
                                        className="img-fluid"
                                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                                    />
                                    <div className='ms-5'>

                                    <div className="position-absolute bottom-0 start-5 text-white">
                <h2>Discover the unknown</h2>
                <p>Curated guide by experts</p>
              </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="">Create Account</h3>
                                        <p>Start Your 7 days free trial</p>


                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="form-control form-control-lg"
                                                value={formData.firstName}
                                                placeholder='Firs tName'
                                                onChange={handleChange}
                                            />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                value={formData.email}
                                                placeholder='Email'
                                                onChange={handleChange}
                                            />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="firstName"
                                                name="firstName"
                                                className="form-control form-control-lg"
                                                value={formData.password}
                                                placeholder='Create password'
                                                onChange={handleChange}
                                            />

                                        </div>



                                        <div className="d-flex justify-content-center pt-3">

                                            <button type="button" className="btn btn-primary w-100 btn-lg ms-2" onClick={handleSubmit}>
                                                Sign Up
                                            </button>
                                        </div>
<p className='my-3'>Alreydy a member ? <span className='text-primary '>Log in</span></p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;

