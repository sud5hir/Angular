import { Action } from "@ngrx/store";
export const ADD_USER = 'ADD_USER';

export class UserListAction implements Action {
    readonly type = ADD_USER;
    payload: String | undefined;
}