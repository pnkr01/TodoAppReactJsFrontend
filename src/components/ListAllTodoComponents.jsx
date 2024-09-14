import { useEffect, useState } from 'react';
import { deleteTodoApi, retrieveTodosApi } from '../api/TodosApi';
import { useAuth } from '../security/AuthContext';
import { useNavigate } from 'react-router-dom';

function ListAllTodosComponent() {

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    
    const authContext = useAuth();

    const username = authContext.username;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => refreshTodos(), []);
    
    const navigate = useNavigate();

    function refreshTodos() {
        retrieveTodosApi(username).then(response => {
            setTodos(response.data);
        }); 
    }

    function onDeleteTodo(id) {
        console.log('clicked delete button for id: ', id);
        deleteTodoApi(username, id).then(response => { 
            console.log('delete response: ', response);
            setMessage(`Delete of todo ${id} successful`);
            refreshTodos();
        });
    }

    function onUpdateTodo(id) {
        console.log('clicked update button', id);
        navigate(`/todos/${id}`);
    }

    return (
        <>
            <div className="ListAllTodos">
                <h1 className='heading'>
                    List all Todos
                </h1>
                {message && <div className='alert alert-success'>{message}</div>}

                <table className='todoTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td><button className='btn btn-warning m-2' onClick={() => onDeleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className='btn btn-success  m-2' onClick={() => onUpdateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <center>
                <div><button className='btn btn-success m-2' onClick={()=>onUpdateTodo(-1)}>Add new Todo</button></div>
               </center>
        </div>
        </>
    );
}   


export default ListAllTodosComponent;