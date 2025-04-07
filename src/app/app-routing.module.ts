import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';

export const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/:id', component: PlantDetailComponent },
  { path: 'plants/:id/edit', component: EditPlantComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
