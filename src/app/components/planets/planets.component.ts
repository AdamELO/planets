import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  size: string = '50px'
  name: string = 'Earth'
}
