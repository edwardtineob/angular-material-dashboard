import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IVehicle {
   id: number;
   capacity: number;
   year: number;
   registerNumber: string;
   model: any;
}

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private client: HttpClient) { }

  getVehicles(){
    return this.client.get<IVehicle[]>('http://localhost:3000/vehicle');
  }
}
