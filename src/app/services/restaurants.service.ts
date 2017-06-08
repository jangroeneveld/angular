import { Injectable } from '@angular/core';
var restaurants = require('./restaurants.json');

@Injectable()
export class RestaurantsService {
    getRestaurants() {
        return restaurants;
    }
}