import { Component, Input } from '@angular/core';
import { PubSub } from '../../../../shared/PubSub';

@Component({
    selector: 'restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent{
    selected: boolean = false;
    @Input() data: any = {name: 'adsf', rank: 3, score: '33'};

    constructor(private pubsub: PubSub){
        this.pubsub.on('selectedRestaurant', this.toggleSelected)
    }

    toggleSelected = (restaurantId) => {
        this.selected = (restaurantId == this.data.id);
    }

    showRestaurantOnMap = (id) => {
        this.pubsub.fire('showRestaurant', id);
    }
}