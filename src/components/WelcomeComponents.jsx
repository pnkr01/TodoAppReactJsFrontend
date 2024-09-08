import { useParams, Link } from "react-router-dom";
import {retrieveHelloWorldPathNameApi } from "../api/HelloWorldApi.js";
import { useState } from "react";

function WelcomeComponent() {
    const { username } = useParams();
    
    const [ message, setMessage ] = useState(null);

  function callHelloRestApi() {
    retrieveHelloWorldPathNameApi("pawan")
      .then((response) => successMessage(response))
      .catch((error) => errorMessage(error))
      .finally(() => console.log("cleanup finally"));
    }
    
    function successMessage(response) {
        setMessage("Hello World");
        console.log(`success msg is : =>  ${response.data.message}`);
    }

    function errorMessage(response) {
        setMessage("Error Message");
        console.log(`error msg is : =>  ${response.toString()}`);
    }

  return (
    <>
      <center>
        <div className="WelcomeComponent">
          <h1>Welcome {username}</h1>
          Manage your Todos <Link to="/todos">here</Link>
        </div>
        <div className="btn btn-success" onClick={callHelloRestApi}>
          Call Hello Rest API
        </div>
              <div className="text-info">{ message }</div>
      </center>
    </>
  );
}

export default WelcomeComponent;
