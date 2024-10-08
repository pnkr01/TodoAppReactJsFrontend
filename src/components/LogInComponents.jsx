
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import showErrorMessage from './ShowErrorMessageComponents';
import { useAuth } from '../security/AuthContext';
import showSucessMessage from './ShowSucessMessageComponents';

function LogInComponent() {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isSucess, setSucessMessage] = useState(false);
    const [isError, setErrorMessage] = useState(false);

    const navigate = useNavigate();
    const authContext = useAuth();

    const handleUsernameChange = (event) => {
        console.log(event.target.value);
        
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmitButton() {
        if (authContext.login(username, password)) {
            setSucessMessage(true);
            setErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setSucessMessage(false);
            setErrorMessage(true);
        } 
    }

    return (
        <>
            <center>
                <h2>Time to LogIn</h2>
            <div className="LogInComponent">
                <div className="LogInForm">
                    {isSucess && showSucessMessage()}
                    {isError && showErrorMessage()}
                <div className="loginContainer">
                    <label htmlFor="username" className='usernamelabel'>Username : </label>
                    <input type="text" placeholder="Username" className="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="passwordContainer">
                    <label htmlFor="password">Password : </label>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button className='loginbutton'onClick={handleSubmitButton}>Log In</button>
                </div>
                </div>
            </center>
        </>
    );
} 

 


export default LogInComponent;