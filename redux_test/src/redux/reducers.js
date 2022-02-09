import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPELTE } from "./actions"
import { combineReducers } from "redux"

// state의 모습 구상
// ["코딩", "점심 먹기"]
// => [{text: "코딩", done: false}, {text: "점심 먹기", done: false}]
// => {todos: [{text: "코딩", done: false}, {text: "점심 먹기", done: false}], filter: "ALL"}

// 초기값을 위에다가 이렇게 설정할 수도 있음!
const initialState = { todos: [], filter: "ALL" }


// 구버전
// export function todoApp(previousState = initialState, action) {
//     // 초기 값을 설정해주는 부분
//     // if(previousState === undefined) {
//     //     return [];
//     // }

//     // immutable 하게 바꿔주는 것(구조분해)
//     if (action.type === ADD_TODO) {
//         return { ...previousState, todos: [...previousState.todos, { text: action.text, done: false }] }
//     }

//     if (action.type === COMPLETE_TODO) {
//         return {
//             ...previousState,
//             todos: previousState.todos.map((todo, index) => {
//                 if (index === action.index) {
//                     return { ...todo, done: true }
//                 }

//                 return todo
//             }),
//         }
//     }

//     if(action.type === SHOW_COMPELTE) {
//         return {
//             ...previousState,
//             filter: "COMPLETE"
//         }
//     }

//     if(action.type === SHOW_ALL) {
//         return {
//             ...previousState,
//             filter: "ALL"
//         }
//     }

//     return previousState
// }
// export default reducer