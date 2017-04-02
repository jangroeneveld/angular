import { Component, Output, EventEmitter } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { PubSub } from '../../../shared/PubSub';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent{
    @Output() select: EventEmitter<any> = new EventEmitter();
    constructor(private restaurantsService: RestaurantsService, private pubsub: PubSub){
        setTimeout( () => {
        this.restaurants = this.getTopThree(this.restaurantsService.getRestaurants());
        }, 1000);
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
        this.pubsub.fire('topThreeChosen', tempRestaurants);
        return tempRestaurants;
    };

    notifySelected = ($event) => {
        this.pubsub.fire('selectedRestaurant', $event);
    }
}