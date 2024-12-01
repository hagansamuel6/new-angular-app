import { Component, Inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingLocationSingle: HousingLocation;
  filteredLocationList: HousingLocation[] = [];

  // housingService : HousingService = Inject(HousingService);
  constructor(private housingService : HousingService){
    this.housingService.getAllHousingLocations()
    .then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });

    this.housingLocationSingle = this.housingService.getHousingLocation();
  }

  filterResults(text: string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
