import React, { useState } from 'react'

function Password() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});

    const handleEmailChange = (e) => setEmail(e.target.value);

    const validate = () => {
        const error = {};

        if (!email) {
            error.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error.email = 'Invalid email';
        }


        setError(error);
        return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (Object.keys(validationError).length > 0) {
            setError(validationError);
        } else {
            console.log('Form submitted:', { email });
            setEmail('');

            setError({});
        }
    };
    return (
        <div className='Password'>
            <div className='password'>
                <div className='password-container'>
                    <div className='sign-in'>
                      
                      <h1>Password Reset</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="password-container">

                            <div className='reminder'>
                                
                                <p>Forgotten your password? enter
                                    your e-email address  below , and we'll send you can an e-email allowing you reset it.
                                </p>
                            </div>

                            <div className="input-wrapper">
                                {error.email && <span className="error">{error.email}</span>}
                                <input
                                    className="input-field"
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required

                                />
                                <label className="input-label">Email</label>
                                <span className="input-highlight"></span>
                            </div>



                        </div>

                        <button type="submit" className="password-button">Reset My Password</button>
                    </form>



                </div>
            </div>
        </div>
    )
}

export default Password