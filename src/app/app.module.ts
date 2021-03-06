//Angular
import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Vendor
import 'hammerjs';

//Components
import { ActivitiesComponent } from './sub-pages/recommendations/activities/activities.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './sub-pages/details/details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './sub-pages/bookings/bookings.component';
import { InformationComponent } from './sub-pages/information/information.component';
import { RecommendationsComponent } from './sub-pages/recommendations/recommendations.component';
import { ReviewComponent } from './sub-pages/details/review/review.component';
import { SettingsComponent } from './sub-pages/settings/settings.component';

//Services
import { CategoriesService } from './services/categories.service';
import { PubSub } from '../shared/PubSub';
import { RestaurantsService } from './services/restaurants.service';
import { UserService } from './services/user.service';

@NgModule({
	declarations: [
		ActivitiesComponent,
		AppComponent,
		DetailsComponent,
		BookingsComponent,
		HeaderComponent,
		HomeComponent,
		InformationComponent,
		RecommendationsComponent,
		ReviewComponent,
		SettingsComponent
	],
	imports: [
		BrowserModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: true })
	],
	providers: [
		CategoriesService,
		PubSub,
		RestaurantsService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
