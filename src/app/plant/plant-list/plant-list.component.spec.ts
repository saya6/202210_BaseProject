/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantListComponent ],
      providers: [ PlantService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    component.plants = [
      new Plant(
        faker.datatype.number(),// id
        faker.lorem.sentence(),// nombre_comun
        faker.lorem.sentence(),// nombre_cientifico
        faker.lorem.sentence(),// tipo
        faker.datatype.number(),// altura_maxima
        faker.lorem.sentence(),// clima
        faker.lorem.sentence(),// sustrato_siembra
      )
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count the types of the plants', () => {
    component.countPlants()
    expect(component.ocurrencies.size).toBe(1);
  });

  it('should have the exact number of plants', () => {
    component.plants = [
      new Plant(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
      new Plant(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
      new Plant(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
    ]
    expect(component.plants.length).toBe(3);
  });

});
