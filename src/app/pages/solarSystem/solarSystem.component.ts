import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlanetsComponent } from '../../components/planets/planets.component';
import { Planet } from '../../models/planet.model';
import { PlanetsinfoService } from '../../services/planetsinfo.service';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlanetsComponent, RouterLink],
  templateUrl: './solarSystem.component.html',
  styleUrl: './solarSystem.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolarSystemComponent implements OnInit{ 
  planets!: Signal<Planet[]>
  constructor(private readonly _planetService: PlanetsinfoService) { 
  }
  ngOnInit(): void {
    this.planets = this._planetService.planets
  }
}
