import { UserEnum } from './../../enum/user';
import { Users } from './../../modal/users';
import { Action } from '../actions'

export interface userReducerState {
    // define state 
    loading: boolean,
    loaded: boolean, 
    users: Users[]
};

export const initialState:userReducerState = {
    //set initial state
    loading: false,
    loaded: false,
    users: []

};

export  function userReducer(state: userReducerState | undefined, action: Action):userReducerState {
    switch(action.type) {
        case UserEnum.USER_LIST: {
            return {
                ...state,
                loaded: false,
                loading: true,
                users: []
            }
        }
        case UserEnum.USER_LIST_SUCCESS : {
            const updatedUser = state?.users.concat(action.payload.data)
            return {
                ...state,
                loading: false,
                loaded: true,
                users: updatedUser || []
            }
        }
        default:{
            return {
                ...state,
                loading: false,
                loaded: false,
                users: []
            }
        }
    }
}

// Return selectors

export const getUserLoading = (state:userReducerState) => state.loading
export const getUserLoaded = (state:userReducerState) => state.loaded
export const getUserUsers = (state:userReducerState) => state.users
 