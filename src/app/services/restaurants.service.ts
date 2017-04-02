import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {
    getRestaurants() {
        return [
            { id: 1, name: "Tao", cuisine: "Sushi", lon: 53.190, lat: 5.790 },
            { id: 2, name: "De Walrus", cuisine: "Hollands", lon: 53.191, lat: 5.791 },
            { id: 3, name: "Kelder 65", cuisine: "Hollands", lon: 53.192, lat: 5.792 },
            { id: 4, name: "De Dikke van Dale", cuisine: "Hollands", lon: 53.193, lat: 5.793 },
            { id: 5, name: "Het Broodhuys", cuisine: "Hollands", lon: 53.194, lat: 5.794 },
            { id: 6, name: "Eten in de molen", cuisine: "Regionaal", lon: 53.195, lat: 5.795 },
            { id: 7, name: "Sin Jah", cuisine: "Chinees", lon: 53.196, lat: 5.796 },
            { id: 8, name: "Le Sandre", cuisine: "Vis", lon: 53.197, lat: 5.797 },
            { id: 9, name: "Wannee", cuisine: "Hollands", lon: 53.198, lat: 5.798 },
            { id: 10, name: "Pompeï", cuisine: "Pizzeria", lon: 53.199, lat: 5.799 },
            { id: 11, name: "Sems", cuisine: "Frans", lon: 53.200, lat: 5.800 },
            { id: 12, name: "Amfora", cuisine: "Mediterraans", lon: 53.201, lat: 5.801 },
            { id: 13, name: "Saray", cuisine: "Turks", lon: 53.202, lat: 5.802 },
            { id: 14, name: "Us Heit", cuisine: "Frans", lon: 53.203, lat: 5.803 },
            { id: 15, name: "El Toro", cuisine: "Spaans", lon: 53.204, lat: 5.804 },
            { id: 16, name: "Leeuwarden Lounge", cuisine: "Spaans", lon: 53.205, lat: 5.805 },
            { id: 17, name: "\'t Goede", cuisine: "Hollands", lon: 53.206, lat: 5.806 },
            { id: 18, name: "TOTT", cuisine: "Wereldkeuken", lon: 53.207, lat: 5.807 },
            { id: 19, name: "De Vrouwenpoort", cuisine: "Regionaal", lon: 53.208, lat: 5.808 },
            { id: 20, name: "Onder de kelders", cuisine: "Wereldkeuken", lon: 53.209, lat: 5.809 }
        ];
    }
}