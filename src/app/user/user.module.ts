import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent]
})
export class UserModule {}
