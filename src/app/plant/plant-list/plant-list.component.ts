import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plant> = [];
  ocurrencies: Map<string, number> = new Map<string, number>();
  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.countPlants()
    });
  }

  ngOnInit() {
    this.getPlants();
  }

  countPlants(){
    this.plants.forEach((elem) => {
      let currentValue = this.ocurrencies.get(elem.tipo)
      if (currentValue === undefined) {
        this.ocurrencies.set(elem.tipo, 1)
      } else {
        this.ocurrencies.set(elem.tipo, currentValue+1)
      }
    })
  }



}
