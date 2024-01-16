import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsComponent {
  @Input()
  planet : Planet = {
    name: '',
    description: '',
    mass: {
        massValue: 0,
        massExponent: 0,
    },
    vol: {
        volValue: 0,
        volExponent: 0,
    },
    gravity: 0,
    sideralOrbit: 0,
    sideralRotation: 0,
    avgTemp: 0,
    moons: [{}],
    distanceFromSun: 0,
    img: ''
  }
}
