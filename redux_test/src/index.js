import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"
import {addTodo, completeTodo, showComplete} from "./redux/actions"


store.subscribe(() => {
    console.log(store.getState())    
});

store.dispatch(addTodo("할일"))
store.dispatch(completeTodo(0))
store.dispatch(showComplete())

// console.log(store)
// console.log(store.getState())
// store.dispatch(addTodo("coding"))
// console.log(store.getState())

// store.dispatch(addTodo("coding"))
// store.dispatch(addTodo("read book"))
// store.dispatch(addTodo("eat"))
// unsubscribe()
// store.dispatch(addTodo("coding"))
// store.dispatch(addTodo("read book"))
// store.dispatch(addTodo("eat"))

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
