import * as fromUser from './user.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface RootReducerState {
  usersstate: fromUser.userReducerState
}

export const RootReducer: ActionReducerMap<RootReducerState> = {
  usersstate: fromUser.userReducer
};

// get user state
export const getUserState = (state:fromUser.userReducerState) => state
export const getUserStateLoaded = createSelector(getUserState, (state:fromUser.userReducerState) => state.loaded)
export const getUserStateLoading = createSelector(getUserState, (state:fromUser.userReducerState) => state.loading)
export const getUserStateUser = createSelector(getUserState, (state:fromUser.userReducerState) => state.users)


export const metaReducers: MetaReducer<RootReducerState>[] = !environment.production ? [] : [];
