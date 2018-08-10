import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>;
  pageSize = 3;
  currentPage = 1;

  constructor(
    private furnitureService: FurnitureService, 
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.furnitures$ = this.furnitureService.getAll()
  }

  pageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  deleteItem(id){
    this.furnitureService.deleteSingle(id)
      .subscribe(() => {
        this.toastrService.success('Furniure deleted', 'Success');
        this.furnitures$ = this.furnitureService.getAll();
      })
  }
}
