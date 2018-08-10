import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures: FurnitureModel[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.furnitureService
      .getMy()
      .subscribe(res => {
        this.furnitures = res;
      });
  }

  delete(id: string): void {
    this.furnitureService
      .deleteSingle(id)
      .subscribe(res => {
        this.furnitures = this.furnitures.filter(f => f.id !== id);
      });
  }

}
