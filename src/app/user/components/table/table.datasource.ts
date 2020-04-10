import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { PageQuery, User } from '../../models';
import { UserHttpService } from '../../services/user.http.service';

export class UserDataSource implements DataSource<User> {
  private userDataSubject = new BehaviorSubject<User[]>([]);

  private subs = new Subscription();

  constructor(private userHttp: UserHttpService) {}

  loadUsers(page: PageQuery) {
    this.subs.add(
      this.userHttp
        .loadUsers(page.index, page.size)
        .subscribe(users => this.userDataSubject.next(users))
    );
  }

  connect(): Observable<User[]> {
    return this.userDataSubject.asObservable();
  }

  disconnect(): void {
    this.subs.unsubscribe();
  }
}
