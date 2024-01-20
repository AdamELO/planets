import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PlanetsinfoService } from '../../services/planetsinfo.service';

@Component({
  selector: 'app-planet-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetDetailsComponent implements OnInit {
  nameParam!: string | null;
  planetInfo: any;

  constructor(private readonly route: ActivatedRoute, private readonly _planetService: PlanetsinfoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nameParam = params.get('name');
      this.planetInfo = this._planetService.get(this.nameParam);
    });
  }
}
