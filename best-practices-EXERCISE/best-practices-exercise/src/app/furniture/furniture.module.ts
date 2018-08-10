import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { furnitureComponents } from './index';
import { FurnitureService } from './furniture.service';

@NgModule({
  declarations: [
    ...furnitureComponents,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
