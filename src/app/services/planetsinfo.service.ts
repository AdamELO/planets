import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Planet } from '../models/planet.model';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of} from 'rxjs';
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

  public get(name: string|null) {
    if (name !== null) {
      return this.planets().find(c => c.name === name);
    }else{
      return console.log("error! name is null");
    }
  }

  constructor(private readonly _httpClient: HttpClient) {
    forkJoin([this.api1Call, this.api2Call])
    .subscribe(
      (values) => {
        const r = values.at(1).map((v:any) => { 
          const obj = values.at(0).bodies.find((o: any) => o.englishName === v.name);
          return {...v, infos: obj}
        });
        this._planets.set(r)
      } 
    )
  }


}
