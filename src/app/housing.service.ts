import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'http://localhost:3000/locations';
  
  constructor() { }

  housingLocationSingle: HousingLocation = 
    {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
  }
  


  async getAllHousingLocations(): Promise<HousingLocation[]>  {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined>  {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  getHousingLocation(): HousingLocation {
    return this.housingLocationSingle;
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`home application received : firstname : ${firstName}, lastname : ${lastName}, email: ${email}`)
  }
}
