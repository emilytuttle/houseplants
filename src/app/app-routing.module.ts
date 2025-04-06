import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

export const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/:id', component: PlantDetailComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
