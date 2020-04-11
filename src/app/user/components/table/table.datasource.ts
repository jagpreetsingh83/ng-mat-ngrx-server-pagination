import { DataSource } from '@angular/cdk/table';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { PageQuery, User } from '../../models';
import { load, selectUsersPage, UserState } from '../../store';

export class UserDataSource implements DataSource<User> {
  private userDataSubject = new BehaviorSubject<User[]>([]);

  private subs = new Subscription();

  constructor(private store: Store<UserState>) {}

  loadUsers(page: PageQuery) {
    this.subs.add(
      this.store.pipe(select(selectUsersPage(page))).subscribe(users => {
        if (users.length > 0) {
          this.userDataSubject.next(users);
        } else {
          this.store.dispatch(load({ payload: { page } }));
        }
      })
    );
  }

  connect(): Observable<User[]> {
    return this.userDataSubject.asObservable();
  }

  disconnect(): void {
    this.subs.unsubscribe();
  }
}
