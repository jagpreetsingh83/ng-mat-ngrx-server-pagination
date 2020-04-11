import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { User } from '../models';
import { UserHttpService } from '../services/user.http.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.load),
      mergeMap(({ payload: { page } }) =>
        this.userHttp.loadUsers(page.index, page.size).pipe(
          tap(users => console.log('Received', users)),
          catchError(error => {
            return of(UserActions.loadFailure({ error }));
          }),
          map((users: User[]) =>
            UserActions.loadSuccess({ payload: { users } })
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private userHttp: UserHttpService) {}
}
