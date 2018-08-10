import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { FurnitureService } from '../furniture.service';
import { CreateFurnitureModel } from '../models/create-furniture.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  furnitureForm: FormGroup;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.furnitureForm = new FormGroup({
      'make': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'model': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'year': new FormControl('', [
        Validators.required,
        Validators.min(1950),
        Validators.max(2050)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      'image': new FormControl('', [
        Validators.required
      ]),
      'material': new FormControl('')
    });
  }

  onSubmit(): void {
    const createFurnitureModel: CreateFurnitureModel = new CreateFurnitureModel(
      this.make.value, this.model.value, this.year.value, this.description.value, this.price.value, this.image.value, this.material.value);
      
    this.furnitureService
      .create(createFurnitureModel)
      .subscribe();
  }

  get make(): AbstractControl {
    return this.furnitureForm.get('make');
  }

  get model(): AbstractControl {
    return this.furnitureForm.get('model');
  }

  get year(): AbstractControl {
    return this.furnitureForm.get('year');
  }

  get description(): AbstractControl {
    return this.furnitureForm.get('description');
  }

  get price(): AbstractControl {
    return this.furnitureForm.get('price');
  }

  get image(): AbstractControl {
    return this.furnitureForm.get('image');
  }

  get material(): AbstractControl {
    return this.furnitureForm.get('material');
  }
}
