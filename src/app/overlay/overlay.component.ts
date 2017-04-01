import { Component } from '@angular/core';

@Component({
    selector: 'overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent{


    onSelect = ($event) => {
        console.log($event)
    }
}