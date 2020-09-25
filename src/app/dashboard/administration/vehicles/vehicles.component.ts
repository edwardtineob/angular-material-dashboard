import { Component, OnInit } from '@angular/core';
import { VehiclesService, IVehicle } from '../../../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  title: string = 'Vehiculos';
  menu: any[] = [
    {item: 'Nuevo', path: ''}
  ];

  vehicles: IVehicle[];
  constructor(private vehicleService: VehiclesService) { }

  getVehicle(){
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;      
    })
  }

  ngOnInit() {
    this.getVehicle();
  }

}
