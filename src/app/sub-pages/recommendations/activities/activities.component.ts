import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as $ from 'typed.js'

@Component({
    selector: 'activities',
    templateUrl: './activities.component.html',
    styleUrls: ['activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
    blocks;

    constructor(private route: ActivatedRoute){}
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
        });

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