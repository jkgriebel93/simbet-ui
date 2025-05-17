import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Track } from '../interfaces/track';

@Injectable({
  providedIn: 'root'
})
export class DrfService {
  private http = inject(HttpClient);

  // https://proservice.drf.com/proservice/entries/date/20250515
  proServiceBaseUrl = 'https://proservice.drf.com/proservice/';

  constructor() { }

  getEntriesForDate(date: string): Observable<any> {
    return this.http.get<Track[]>(this.proServiceBaseUrl + 'entries/date/' + date);
  }

}
