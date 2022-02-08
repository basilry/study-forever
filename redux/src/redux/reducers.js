// state의 모습 구상
// ["코딩", "점심 먹기"]

import {ADD_TODO} from "./actions"

// 초기값을 위에다가 이렇게 설정할 수도 있음!
const initialState = []

export function todoApp(previousState = initialState, action) {

    // 초기 값을 설정해주는 부분
    // if(previousState === undefined) {
    //     return [];
    // }

    // immutable 하게 바꿔주는 것(구조분해)
    if(action.type === ADD_TODO) {
        return [...previousState, action.todo]
    }

    return previousState
}
