import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"
import {addTodo} from "./redux/actions"


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())    
});

// console.log(store)
// console.log(store.getState())
// store.dispatch(addTodo("coding"))
// console.log(store.getState())

store.dispatch(addTodo("coding"))
store.dispatch(addTodo("read book"))
store.dispatch(addTodo("eat"))
unsubscribe()
store.dispatch(addTodo("coding"))
store.dispatch(addTodo("read book"))
store.dispatch(addTodo("eat"))

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
