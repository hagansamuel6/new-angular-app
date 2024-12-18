import { Component, Input } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
