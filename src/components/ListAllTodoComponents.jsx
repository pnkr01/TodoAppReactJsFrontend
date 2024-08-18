


function ListAllTodosComponent() {

    const todos = [
        {
            id: 1,
            description: 'Learn React',
            targetDate: '2021-09-10',
            isCompleted: false,
        },
        {
            id: 2,
            description: 'Learn Spring Boot',
            targetDate: '2021-09-10',
            isCompleted: false,
        },
        {
            id: 3,
            description: 'Learn Angular',
            targetDate: '2021-09-10',
            isCompleted: false,
        },
        {
            id: 4,
            description: 'Learn Node JS',
            targetDate: '2021-09-10',
            isCompleted: false,
        },

        {
            id: 5,
            description: 'Learn Java',
            targetDate: '2021-09-10',
            isCompleted: false,
        }

    ];

    return (
        <>
            <div className="ListAllTodos">
                <h1 className='heading'>
                    List all Todos
                </h1>
                {/* add boarder in the table */}

                <table className='todoTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate}</td>
                                    <td>{todo.isCompleted.toString()}</td>
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