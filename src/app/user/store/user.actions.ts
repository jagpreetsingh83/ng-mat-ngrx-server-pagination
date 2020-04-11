import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { PageQuery, User } from '../models';

export const load = createAction(
  '[User Table] Load Users',
  props<{ payload: { page: PageQuery } }>()
);

export const loadSuccess = createAction(
  '[User API] Load Success',
  props<{ payload: { users: User[] } }>()
);

export const loadFailure = createAction(
  '[User API] Load Failure',
  props<{ error: HttpErrorResponse }>()
);
