import useReduxState from "../hooks/useReduxState"
import todos from "../redux/reducers/todos"

export default function TodoList() {

    const state = useReduxState()

    return <ul>{state.todos.map((todo) => {
        return <li>{todo.text}</li>
    })}</ul>
}