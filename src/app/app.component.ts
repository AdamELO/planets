import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetsinfoService } from './services/planetsinfo.service';
import { Planet } from './models/planet.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlanetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'solar-system';
  planets: Planet[] = []
  constructor(private readonly _planetService: PlanetsinfoService) { }
  ngOnInit(): void {
    this.planets = this._planetService.planets()
  }

}
