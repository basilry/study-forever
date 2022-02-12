import { useSelector } from "react-redux"
import { connect } from "react-redux"
import TodoList from "../components/TodoList"

// 분리된 첫 번째 버전
// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

// const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)



// 신규 생성 버전
function TodoListContainer() {

    const todos = useSelector((state) => state.todos)

    return <TodoList todos={todos} />
}

export default TodoListContainer