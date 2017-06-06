import { Component, OnInit } from '@angular/core';
import * as $ from 'typed.js'

@Component({
    selector: 'recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
    consturctor() {

    }
    ngOnInit() {
        var blocks = document.getElementsByClassName('block');

        for (var i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('click', rescale);
        }

        function rescale(event) {
            for (var i = 0; i < event.target.parentElement.children.length; i++) {
                event.target.parentElement.children[i].style = "flex-grow: 1";
            }
            event.target.style.flexGrow = 3;
        }
    }
}