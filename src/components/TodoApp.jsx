import '../css/Todo.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes,useNavigate,useParams} from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className="" TodoApp>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogInComponent />} />
                    <Route path="/login" element={<LogInComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
            
    );
}

function LogInComponent() {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isSucess, setSucessMessage] = useState(false);
    const [isError, setErrorMessage] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        console.log(event.target.value);
        
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        
        setPassword(event.target.value);
    }

    function handleSubmitButton() {
        console.log('Submit button clicked');
        console.log('Username : ', username);
        console.log('Password : ', password);

        if (username === 'admin' && password === 'admin') {
            setSucessMessage(true);
            setErrorMessage(false);
            console.log('Successful');
            navigate(`/welcome/${username}`);
        } else {
            setSucessMessage(false);
            setErrorMessage(true);
            console.log('Failed');
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

function showSucessMessage() {
    return (
        <div className="SucessMessage">Login Successful</div>
    );
}

function showErrorMessage() {
    return (
        <div className="ErrorMessage">Login Failed</div>
    );
}

function WelcomeComponent() {
    
    const { username } = useParams();
    
    return (
        <>
            <center>
                <div className="WelcomeComponent"><h1>Welcome {username}</h1></div>
            </center>
        </>
    );
}   

function ErrorComponent() {
    return (
        <>
        <div className="WelcomeComponent"> <h1>
            Its 404, The page is not found, We are working on solving this soon..
            </h1>
        </div>
        </>
    );
}   