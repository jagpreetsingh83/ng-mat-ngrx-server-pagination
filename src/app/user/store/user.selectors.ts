import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PageQuery } from '../models';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);

const { selectAll } = fromUser.adapter.getSelectors();

const selectAllUsers = createSelector(selectUserState, selectAll);

export const selectUsersPage = (page: PageQuery) =>
  createSelector(selectAllUsers, allUsers => {
    const start = page.index * page.size;
    const end = start + page.size;
    return allUsers.slice(start, end);
  });

export const selectLoading = createSelector(
  selectUserState,
  state => state.loading
);
