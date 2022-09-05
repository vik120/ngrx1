import { Users } from 'src/app/modal/users';
import { Action } from '@ngrx/store';
import {UserEnum} from '../../enum/user'

export class UserListAction implements Action {
    readonly type = UserEnum.USER_LIST;
    constructor() { }
}

export class UserListCreatorSuccess implements Action {
    readonly type = UserEnum.USER_LIST_SUCCESS;
    constructor(public payload?: {data: Users[]}) { }
}

export class UserListCreatorFail implements Action {
    readonly type = UserEnum.USER_LIST_FAIL;
    constructor(public payload: any) { }
}

export type Actions = UserListAction | UserListCreatorSuccess | UserListCreatorFail;