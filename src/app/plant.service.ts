import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = 'http://localhost:3000/plants';

  constructor(private http: HttpClient) {}

  // Get all plants
  getPlants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single plant by ID
  getPlantById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new plant
  addPlant(plant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, plant);
  }

  // Delete a plant by ID
  deletePlant(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
