import { Component, OnInit } from '@angular/core';
import * as $ from 'typed.js';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
    selector: 'recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
    blocks;
    name:string;
    items: any[] = ["item1","item2","item3","item4","item5","item6","item7","item8","item9"];

    constructor(private restaurantsService: RestaurantsService){
        this.items = restaurantsService.getRestaurants();
    }

    buildArr(theArr: any[]){
        debugger;
        
        var arrOfarr = [];
        for(var i = 0; i < theArr.length ; i+=3) {
            var row = [];
            for(var x = 0; x < 3; x++) {
                var value = theArr[i + x];
                if (!value) {
                break;
                }
                row.push(value);
                }
            arrOfarr.push(row);
        }
        return arrOfarr;
    }

    ngOnInit() {
        this.blocks = document.getElementsByClassName('block');

        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].addEventListener('click', this.rescale);
        }
    }

    rescale = (event) => {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].style = "";
        }
        for (let i = 0; i < event.target.parentElement.children.length; i++) {
            event.target.parentElement.children[i].style = "flex-grow: 1";
        }
        event.target.style.flexGrow = 3;
    }
}