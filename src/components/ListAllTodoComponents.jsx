import { useEffect, useState } from 'react';
import { deleteTodoApi, retrieveTodosApi } from '../api/TodosApi';
import { useAuth } from '../security/AuthContext';

function ListAllTodosComponent() {

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    
    const authContext = useAuth();

    const username = authContext.username;

    useEffect(()=> refreshTodos(),[]);

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
                                    <td><button className='btn btn-warning m-2' onClick={()=> onDeleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
        </>
    );
}   


export default ListAllTodosComponent;