import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-plant',
  imports: [],
  templateUrl: './edit-plant.component.html',
  styleUrl: './edit-plant.component.css'
})
export class EditPlantComponent {

  window.editPlant = async (plantId) => {
    const response = await fetch(`${apiUrl}/${plantId}`);
    const plant = await response.json();

    // Populate the edit form with the plant's data
    document.getElementById("editPlantId").value = plant._id;
    document.getElementById("editName").value = plant.name;
    document.getElementById("editType").value = plant.type;
    document.getElementById("editWaterFrequency").value = plant.waterFrequency;
    document.getElementById("editLightRequirement").value = plant.lightRequirement;
    document.getElementById("editDescription").value = plant.description || '';

    // Show the edit form
    editPlantForm.style.display = "block";
  };

}
