import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-unique',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './planetUnique.component.html',
  styleUrl: './planetUnique.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetUniqueComponent{
  @Input() planet : any
  constructor(){}
}
