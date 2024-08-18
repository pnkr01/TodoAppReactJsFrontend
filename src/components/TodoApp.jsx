import '../css/Todo.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LogOutComponent from './LogoutComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './FooterComponents';
import HeaderComponent from './HeaderComponents';
import LogInComponent from './LogInComponents';
import WelcomeComponent from './WelcomeComponents';
import ListAllTodosComponent from './ListAllTodoComponents';
import ErrorComponent from './ErrorComponents';
import AuthProvider from '../security/AuthContext';
import { AuthContext } from '../security/AuthContext';


export default function TodoApp() {
    return (
        <div className="" TodoApp>
            <AuthProvider>
            <BrowserRouter>
                
            <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LogInComponent />} />
                    <Route path="/login" element={<LogInComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path="/todos" element={<ListAllTodosComponent />} />
                    <Route path="/logout" element={<LogOutComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
                <FooterComponent />
                </AuthProvider>
        </div>
            
    );
}
