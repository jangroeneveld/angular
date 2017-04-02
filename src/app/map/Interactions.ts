declare var ol;
export class Interactions{
    ol: any;
    restaurantSource: any;
    constructor(map) {
        this.restaurantSource = new ol.source.Vector({});
        map.addLayer(
            new ol.layer.Vector({
                source: this.restaurantSource,
                zIndex: 10
            })
        );
        
        var feature1 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([5.804,53.201], 'EPSG:4326', 'EPSG:3857')),
        });
        var feature2 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([5.788,53.205], 'EPSG:4326', 'EPSG:3857')),
        });
        var feature3 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([5.795,53.199], 'EPSG:4326', 'EPSG:3857')),
        });
        this.restaurantSource.addFeature(feature1);
        this.restaurantSource.addFeature(feature2);
        this.restaurantSource.addFeature(feature3);
    }

    createFeature = (lat: number, lon: number) => {
        var feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([lat,lon], 'EPSG:4326', 'EPSG:3857')),
        });
        this.restaurantSource.addFeature(feature);
    }
}