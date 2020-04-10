import { Component, OnInit } from '@angular/core';

import { UserHttpService } from '../../services/user.http.service';
import { UserDataSource } from './table.datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName'];

  dataSource: UserDataSource;

  constructor(private userHttp: UserHttpService) {}

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userHttp);
    this.dataSource.loadUsers({ index: 0, size: 3 });
  }
}
