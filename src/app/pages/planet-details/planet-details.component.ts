import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { PlanetsinfoService } from '../../services/planetsinfo.service';
import { PlanetUniqueComponent } from '../../components/planetUnique/planetUnique.component';
import { Planet } from '../../models/planet.model';
// import {  } from '@angular/common';

@Component({
  selector: 'app-planet-details',
  standalone: true,
  imports: [
    CommonModule, PlanetUniqueComponent, RouterLink
  ],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetDetailsComponent implements OnInit {
  nameParam!: string | null;
  planetInfo!: Planet;

  constructor(private readonly route: ActivatedRoute, private readonly _planetService: PlanetsinfoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nameParam = params.get('name');
      this.planetInfo = this._planetService.get(this.nameParam);
    });
  }

  absoluteValue() {
    return Math.abs(this.planetInfo.infos.sideralRotation);
  }
}
