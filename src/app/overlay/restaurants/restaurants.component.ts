import { Component } from '@angular/core';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent{
    restaurants: Array<any> = 
    [
        {name: 'Tao', rank: 1, score: '92%'},
        {name: 'Kelder 65', rank: 2, score: '82%'},
        {name: 'Dunya doner', rank: 3, score: '72%'},
    ]
}