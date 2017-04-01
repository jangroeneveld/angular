import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MapComponent } from './map/map.component';
import { OverlayComponent } from './overlay/overlay.component';
import { RestaurantsComponent } from './overlay/restaurants/restaurants.component';
import { RestaurantComponent } from './overlay/restaurants/restaurant/restaurant.component';

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
	bootstrap: [AppComponent]
})
export class AppModule {

}
