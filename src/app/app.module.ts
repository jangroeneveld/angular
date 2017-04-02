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
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { OverlayComponent } from './overlay/overlay.component';
import { RestaurantsComponent } from './overlay/restaurants/restaurants.component';
import { RestaurantComponent } from './overlay/restaurants/restaurant/restaurant.component';

//Services
import { PubSub } from '../shared/PubSub';
import { RestaurantsService } from './services/restaurants.service';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		OverlayComponent,
		RestaurantsComponent,
		RestaurantComponent
	],
	imports: [
		BrowserModule,
		MaterialModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: true })
	],
	providers: [
		PubSub,
		RestaurantsService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
