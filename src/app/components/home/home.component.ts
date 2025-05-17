import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrfService } from '../../services/drf.service';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() raceDate!: string;
  drfService: DrfService = inject(DrfService);
  todaysTracks: Track[] = [];

  constructor() {
    console.log('About to make API call to DRF with date 20250517');
    this.drfService.getEntriesForDate('20250517').subscribe(entries => {
      console.log(entries);
      this.todaysTracks = entries.entries;
      console.log(this.todaysTracks);
    });
  }

}
