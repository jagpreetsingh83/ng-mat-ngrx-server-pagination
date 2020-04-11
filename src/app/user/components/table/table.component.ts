import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectLoading, UserState } from '../../store';
import { UserDataSource } from './table.datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'firstName', 'lastName'];

  dataSource: UserDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.dataSource = new UserDataSource(this.store);
    this.dataSource.loadUsers({ index: 0, size: 3 });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() =>
      this.dataSource.loadUsers({
        index: this.paginator.pageIndex,
        size: this.paginator.pageSize
      })
    );
  }
}
