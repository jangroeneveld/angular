import { Component } from '@angular/core';
import { PubSub } from '../../shared/PubSub';

@Component({
    selector: 'overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent{
    downsized: boolean = false;
    constructor(private pubsub: PubSub){
        this.pubsub.on('selectedRestaurant', this.selectRestaurant);
        this.pubsub.on('showRestaurant', this.downsizeOverlay);
    }

    selectRestaurant = (data) => {
        console.log(data);
    }

    downsizeOverlay = (id) => {
        this.downsized = true;
    }
}