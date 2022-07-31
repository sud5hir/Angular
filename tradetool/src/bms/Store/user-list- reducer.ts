
import { UserListAction, ADD_USER } from "./user-list.action";


const intialState = {
    userList: ["David", "Aleena"]
}

export function userListReducer(state = intialState, action: UserListAction) {
    switch (action.type) {

        case ADD_USER:
            return { ...state, userList: [...state.userList, action.payload] };
        default:
            return intialState;
    }
}