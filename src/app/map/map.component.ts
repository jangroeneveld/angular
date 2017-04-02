import { Component, OnInit } from '@angular/core';
import { Interactions } from './Interactions';
import { PubSub } from '../../shared/PubSub';
import { RestaurantsService } from '../services/restaurants.service';
declare var ol: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
    ol: any;
    interactions: Interactions;
    restaurants: Array<any>;
    blurred: boolean = true;
    map: any;
    constructor(private pubsub: PubSub, private restaurantsService: RestaurantsService){
        this.restaurants = restaurantsService.getRestaurants();
        this.pubsub.on('showRestaurant', this.toggleBlur);
    }

    ngOnInit(){
        this.map = new ol.Map({
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

        this.map.on('click', (event) => {
            this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
                console.log(feature);
            })
        })

        this.interactions = new Interactions(this.map, this.pubsub);
    }

    toggleBlur = (data) => {
        if (data) {
            this.blurred = false;
        }
    }

    

    createRestaurantIcon = (data) => {
        var restaurant = this.restaurants.find(r => { return r.id == data });
        this.interactions.createFeature(restaurant);
    }
}