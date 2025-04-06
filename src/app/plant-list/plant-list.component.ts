import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule here
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  standalone: true,  // If this is a standalone component
  imports: [CommonModule]  // Add CommonModule to imports
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
