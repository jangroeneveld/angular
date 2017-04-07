import { Component } from '@angular/core';
import { PubSub } from '../../shared/PubSub';

declare var ol;
export class Interactions{
    ol: any;
    restaurantSource: any;
    restaurantFeature: any;
    map: any;

    constructor(map, private pubsub: PubSub) {
        this.map = map;
        this.restaurantSource = new ol.source.Vector({});
        this.pubsub.on('topThreeChosen', this.drawTopThree);
        this.map.addLayer(
            new ol.layer.Vector({
                source: this.restaurantSource,
                zIndex: 10,
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                        src: '../../images/pin.svg',
                        scale: 0.01
                    })
                })
            })
        );
    }

    createFeature = (restaurant) => {
        var feature = new ol.Feature({
            name: restaurant.name,
            restaurantId: restaurant.id,
            geometry: new ol.geom.Point(ol.proj.transform([restaurant.lat,restaurant.lon], 'EPSG:4326', 'EPSG:3857')),
        });
        this.restaurantSource.addFeature(feature);
    }

    drawTopThree = restaurants => {
        console.log('hi');
        restaurants.forEach(r => { this.createFeature(r)});
    }

    drawUserLocation = (location) => {
        var feature = new ol.Feature({
            name: 'user location',
            geometry: new ol.geom.Point(ol.proj.transform([location.coords.longitude, location.coords.latitude], 'EPSG:4326', 'EPSG:3857')),
        });
        this.restaurantSource.addFeature(feature);
    }
}