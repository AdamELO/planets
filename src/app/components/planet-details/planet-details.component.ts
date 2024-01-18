import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsinfoService } from '../../services/planetsinfo.service';

@Component({
  selector: 'app-planet-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetDetailsComponent { 
  name: string;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute, private readonly _planetService: PlanetsinfoService){
    this.name = this.route.snapshot.params['name'];
    const contact = this._planetService.get(this.name);

  }


  // this.router.navigate(['planets']);

}
