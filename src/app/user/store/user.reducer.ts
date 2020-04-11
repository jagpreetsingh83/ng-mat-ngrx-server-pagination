import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { User } from '../models';
import * as UserActions from './user.actions';

export const userFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  loading: boolean;
}

function adapterId(a: User): number {
  return a.id;
}

function adapterSort(a: User, b: User): number {
  return a.id - b.id;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: adapterId,
  sortComparer: adapterSort
});

const initialState: UserState = adapter.getInitialState({
  loading: false
});

export const reducer = createReducer(
  initialState,
  on(UserActions.load, state => ({ ...state, loading: true })),
  on(UserActions.loadSuccess, (state, { payload: { users } }) =>
    adapter.addMany(users, { ...state, loading: false })
  ),
  on(UserActions.loadFailure, state => ({ ...state, loading: false }))
);
