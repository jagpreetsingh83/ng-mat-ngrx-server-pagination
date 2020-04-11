import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TableComponent } from './components/table/table.component';
import * as UserStore from './store';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([UserStore.UserEffects]),
    StoreModule.forFeature(UserStore.userFeatureKey, UserStore.reducer)
  ],
  exports: [TableComponent]
})
export class UserModule {}
