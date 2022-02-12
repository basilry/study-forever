function TodoList({todos}) {
    // const state = useReduxState()

    return (
        <ul>
            {todos.map((todo) => {
                return <li>{todo.text}</li>
            })}
        </ul>
    )
}

export default TodoList


