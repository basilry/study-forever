import "./App.css"
import TodoList from "./components/TodoList"
import useReduxState from "./hooks/useReduxState"
import useReduxDispatch from "./hooks/useReduxDispatch"
import { addTodo } from "./redux/actions"

function App() {
    const state = useReduxState()
    const dispatch = useReduxDispatch(0)

    return (
        <div className="App">
            {JSON.stringify(state)}
            <button onClick={click}>추가</button>
            <TodoList />
            {/* <TodoForm /> */}
        </div>
    )

    function click() {
        dispatch(addTodo("todo"))
    }
}

export default App
