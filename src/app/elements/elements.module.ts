import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  exports: [TableComponent]
})
export class ElementsModule {}
