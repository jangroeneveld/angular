import { Component, Input } from '@angular/core';

@Component({
    selector: 'restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent{
    @Input() data: any = {name: 'adsf', rank: 3, score: '33'};
}