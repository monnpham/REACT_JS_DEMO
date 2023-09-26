import { GIAM, TANG } from "./constant"

let initiaState = {
    soLuong: 1,
}

export let demoReduxReduce = (state = initiaState, action) => {
    switch (action.type) {
        case
            TANG: {
                state.soLuong++
                return { ...state }
            }
        case GIAM: {
            return { ...state, soLuong: state.soLuong - action.payload }
        }


        default: {
            return state
        }
    }
}