import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plantId!: string;
  plant: any = {};
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private plantService: PlantService) {}

  ngOnInit() {
    console.log('PlantDetailComponent initialized'); 
    this.route.params.subscribe(params => {
      this.plantId = params['id'];
      console.log('Plant ID:', this.plantId);
      this.loadPlantDetails();
    });
  }

  loadPlantDetails() {
    this.plantService.getPlantById(this.plantId).subscribe(
      (data) => {
        this.plant = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching plant details:', error);
        this.isLoading = false;
      }
    );
  }
}
