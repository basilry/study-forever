import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { connect } from "react-redux"
import TodoForm from "../components/TodoForm"
import { addTodo } from "../redux/actions"


// 분리된 첫 번째 버전
// const TodoFormContainer = connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addTodo(text))
//         },
//     })
// )(TodoForm)

function TodoFormContainer() {

    const dispatch = useDispatch()

    // function add(text) {
    //     dispatch(addTodo(text))
    // }

    const add = useCallback((text) => {
        dispatch(addTodo(text))
    }, [dispatch])



    return <TodoForm add={add}/>
}

export default TodoFormContainer
