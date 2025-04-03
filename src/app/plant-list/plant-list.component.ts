import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: any[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    console.log('PlantListComponent initialized');
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantService.getPlants().subscribe(
      (data) => {
        this.plants = data;
        console.log('Plants loaded:', this.plants);
      },
      (error) => {
        console.error('Error loading plants:', error);
      }
    );
  }
}
