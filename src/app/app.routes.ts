import { Routes } from '@angular/router';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'solar-system', component: AppComponent},
    { path: 'planet/:name', component: PlanetDetailsComponent },
];
