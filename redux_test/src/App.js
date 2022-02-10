import "./App.css"
import TodoList from "./components/TodoList"
import useReduxDispatch from "./hooks/useReduxDispatch"
import TodoForm from "./components/TodoForm"

function App() {
    return (
        <div className="App">
            <TodoList />
            <TodoForm />
        </div>
    )
}

export default App
