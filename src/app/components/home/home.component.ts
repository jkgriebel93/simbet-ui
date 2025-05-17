import { Component, Input, inject } from '@angular/core';
import { DrfService } from '../../services/drf.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() raceDate!: string;
  drfService: DrfService = inject(DrfService);

  constructor() {
    console.log('About to make API call to DRF with date 20250517');
    this.drfService.getEntriesForDate('20250517').subscribe(entries => {
      console.log(entries);
    });
  }

}
