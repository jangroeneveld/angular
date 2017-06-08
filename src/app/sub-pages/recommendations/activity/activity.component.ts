import { Component, OnInit } from '@angular/core';
import * as $ from 'typed.js'

@Component({
    selector: 'activity',
    templateUrl: './activity.component.html',
    styleUrls: ['activity.component.scss']
})
export class ActivityComponent implements OnInit {
    blocks;

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