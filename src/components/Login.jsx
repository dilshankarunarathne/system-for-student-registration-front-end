import { useState } from 'react';

const Login = () => {
    const [email, setEmailname] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmailname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email: ', email);
        console.log('Password: ', password);
    };

    return (
        <div className='flex flex-wrap justify-center items-start h-screen p-4'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
