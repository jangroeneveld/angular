import { Component, Output, EventEmitter } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent{
    @Output() select: EventEmitter<any> = new EventEmitter();
    constructor(private restaurantsService: RestaurantsService){
        this.restaurants = this.getTopThree(this.restaurantsService.getRestaurants());
        console.log(this.restaurants);
    }
    restaurants: Array<any> = [];

    getTopThree = (restaurants: Array<any>) => {
        var tempRestaurants = []
        for (var i = 1; i <= 3; i++){
            var takenIndex = Math.floor(Math.random() * restaurants.length);
            tempRestaurants.push(restaurants[takenIndex]);
            restaurants.splice(takenIndex, 1);
            tempRestaurants[i-1].rank = i;
            tempRestaurants[i-1].score = (100 - 8 * i);
        };
        return tempRestaurants;
    };

    notifySelected = ($event) => {
        this.select.emit($event);
    }
}