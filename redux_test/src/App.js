import "./App.css"
import TodoList from "./components/TodoList"
import useReduxDispatch from "./hooks/useReduxDispatch"
import TodoForm from "./components/TodoForm"
import TodoListContainer from "./containers/TodoListContainer"
import TodoFormContainer from "./containers/TodoFormContainer"

function App() {
    return (
        <div className="App">
            <TodoListContainer />
            <TodoFormContainer />
        </div>
    )
}

export default App
