import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges, effect } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { PlanetsinfoService } from '../../services/planetsinfo.service';
import { PlanetUniqueComponent } from '../../components/planetUnique/planetUnique.component';

@Component({
  selector: 'app-planet-details',
  standalone: true,
  imports: [
    CommonModule, PlanetUniqueComponent,RouterLink
  ],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetDetailsComponent implements OnInit {
  nameParam!: string | null;
  planetInfo: any;

  constructor(private readonly route: ActivatedRoute, private readonly _planetService: PlanetsinfoService) {
    effect(() => {
      this.planetInfo = this._planetService.get(this.nameParam);
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nameParam = params.get('name');
      this.planetInfo = this._planetService.get(this.nameParam);
    });
  }

}
