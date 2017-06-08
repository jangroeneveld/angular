import { Routes } from '@angular/router';

import { BookingsComponent } from './sub-pages/bookings/bookings.component';
import { DetailsComponent } from './sub-pages/details/details.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './sub-pages/information/information.component';
import { RecommendationsComponent } from './sub-pages/recommendations/recommendations.component';
import { ActivitiesComponent } from './sub-pages/recommendations/activities/activities.component';
import { SettingsComponent } from './sub-pages/settings/settings.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'recommendations/activities/:id/details/:id', component: DetailsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'recommendations/activities/:id', component: ActivitiesComponent },
  { path: 'settings', component: SettingsComponent }
];

