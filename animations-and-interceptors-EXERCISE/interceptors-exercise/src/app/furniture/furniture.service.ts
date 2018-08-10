import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateFurnitureModel } from './models/create-furniture.model';
import { FurnitureModel } from './models/furniture.model';

const baseUrl = 'http://localhost:5000/furniture/';
const createEndpoint = baseUrl + 'create';
const getAllEndpoint = baseUrl + 'all';
const detailsEndpoint = baseUrl + 'details/';
const myFurnitureEndpoint = baseUrl + 'mine';
const deleteEndpoint = baseUrl + 'delete/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  create(body: CreateFurnitureModel) {
    return this.http.post(createEndpoint, JSON.stringify(body));
  }

  getAll(): Observable<FurnitureModel[]> {
    return this.http.get<FurnitureModel[]>(getAllEndpoint);
  }

  getMy(): Observable<FurnitureModel[]> {
    return this.http.get<FurnitureModel[]>(myFurnitureEndpoint);
  }

  getSingle(id: string): Observable<FurnitureModel> {
    return this.http.get<FurnitureModel>(detailsEndpoint + id);
  }

  deleteSingle(id: string) {
    return this.http.delete(deleteEndpoint + id);
  }
}
