import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ReduxContext from "./contexts/ReduxContext"
import store from "./redux/store"
// import {addTodo, completeTodo, showComplete} from "./redux/actions"

// store.subscribe(() => {
//     console.log(store.getState())
// });

// store.dispatch(addTodo("할일"))
// store.dispatch(completeTodo(0))
// store.dispatch(showComplete())

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
        <ReduxContext.Provider value={store}>
            <App />
        </ReduxContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
