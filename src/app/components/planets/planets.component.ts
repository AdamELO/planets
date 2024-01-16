import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  @Input() planet : any


  calculateSize(): number {
    const size : number =  Math.pow(10, this.planet.infos.vol.volExponent / 10);
    return size * 7
  }

}
