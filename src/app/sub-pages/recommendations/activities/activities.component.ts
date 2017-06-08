import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as $ from 'typed.js'
import { RestaurantsService } from '../../../services/restaurants.service';


@Component({
    selector: 'activities',
    templateUrl: './activities.component.html',
    styleUrls: ['activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
    lastBlocks: any[] = [];

    name:string;
    items: any[] = [];
    theArr: any[] = [];

    constructor(private route: ActivatedRoute, private restaurantsService: RestaurantsService){
        this.items = restaurantsService.getRestaurants();
       
        for(var i = 0; i < this.items.length ; i+=3) {
            var row = [];
            for(var x = 0; x < 3; x++) {
                var value = this.items[i + x];
                if (!value) {
                    break;
                }
                row.push(value);
            }
            this.theArr.push(row);
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
        });
    }

    rescale = (event) => {
        for(let i = this.lastBlocks.length -1; i >= 0; i--){
            this.lastBlocks[i].style.flexGrow = "";
            this.lastBlocks.pop();
        }
        
        for (let i = 0; i < event.target.parentElement.children.length; i++) {
            event.target.parentElement.children[i].style.flexGrow = 1;
            this.lastBlocks.push(event.target.parentElement.children[i]);
        }
        event.target.style.flexGrow = 3;
        this.lastBlocks.push(event.target);
    }
}