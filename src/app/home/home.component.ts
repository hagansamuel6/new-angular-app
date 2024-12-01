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
  filteredLocationList: HousingLocation[];

  // housingService : HousingService = Inject(HousingService);
  constructor(private housingService : HousingService){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingLocationSingle = this.housingService.getHousingLocation();
    this.filteredLocationList = this.housingLocationList;
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
