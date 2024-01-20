import { Routes } from '@angular/router';
import { SolarSystemComponent } from './pages/solarSystem/solarSystem.component';
import { PlanetDetailsComponent } from './pages/planet-details/planet-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'solar-system', pathMatch: 'full' },
    { path: 'solar-system', component: SolarSystemComponent},
    { path: 'planet/:name', component: PlanetDetailsComponent },
    { path: '**', component: SolarSystemComponent }
];
