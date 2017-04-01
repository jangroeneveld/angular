import { Component, OnInit } from '@angular/core';
import { Interactions } from './Interactions';
declare var ol: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
    ol: any;
    blurred: boolean = true;
    constructor(){}

    ngOnInit(){
        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                projection: 'EPSG:3857',
                center: ol.proj.transform([5.8, 53.2], 'EPSG:4326', 'EPSG:3857'),
                zoom: 15
            })
        });

        new Interactions(map);
    }
}