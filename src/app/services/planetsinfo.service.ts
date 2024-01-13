import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Planet } from '../models/planet.model';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of, tap, find } from 'rxjs';
import { planetsInfo } from '../data/planetsInfo';

@Injectable({
  providedIn: 'root'
})
export class PlanetsinfoService {

  private _planets: WritableSignal<Planet[]> = signal([]);
  api1Call: any = this._httpClient.get<any[]>('https://api.le-systeme-solaire.net/rest/bodies');
  api2Call: any = of(planetsInfo);

  get planets(): Signal<Planet[]> {
    return this._planets.asReadonly();
  }

  constructor(private readonly _httpClient: HttpClient) {
    forkJoin([this.api1Call, this.api2Call])
    .pipe(
      map((api1Data, api2Data) => {
        return api1Data.filter(api1Item => api1Item.englishName === "Earth" /*api2Data.find(api2Item => api2Item.name)*/)
      }

      )
    ).subscribe(
      res => {
        console.log(res);
        this._planets.set(res)
      } 
    )
  }


}
