import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './sub-pages/bookings/bookings.component';
import { InformationComponent } from './sub-pages/information/information.component';
import { RecommendationsComponent } from './sub-pages/recommendations/recommendations.component';
import { SettingsComponent } from './sub-pages/settings/settings.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'settings', component: SettingsComponent }
];

