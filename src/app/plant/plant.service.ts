import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getPlants(): Observable<Plant[]> {
  return this.http.get<Plant[]>(this.apiUrl);
}
}
