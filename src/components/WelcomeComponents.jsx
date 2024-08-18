import { useParams, Link } from "react-router-dom";

function WelcomeComponent() {
    
    const { username } = useParams();
    
    return (
        <>
            <center>
                <div className="WelcomeComponent">
                    <h1>Welcome {username}</h1>
                   Manage your Todos <Link to="/todos">here</Link>
                </div>
            </center>
        </>
    );
}   

export default WelcomeComponent;