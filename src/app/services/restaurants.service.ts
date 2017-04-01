import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {
    getRestaurants() {
        return [
            { id: 1, name: "Tau", cuisine: "Sushi" },
            { id: 2, name: "De Walrus", cuisine: "Hollands" },
            { id: 3, name: "Kelder 56", cuisine: "Hollands" },
            { id: 4, name: "De Dikke van Dale", cuisine: "Hollands" },
            { id: 5, name: "Het Broodhuys", cuisine: "Hollands" },
            { id: 6, name: "Eten in de Molen", cuisine: "Regionaal" },
            { id: 7, name: "Sin Jah", cuisine: "Chinees" },
            { id: 8, name: "Le Sandre", cuisine: "Vis" },
            { id: 9, name: "Wannee", cuisine: "Hollands" },
            { id: 10, name: "Pompeï", cuisine: "Pizzeria" },
            { id: 11, name: "Sems", cuisine: "Frans" },
            { id: 12, name: "Amfora", cuisine: "Meditteraans" },
            { id: 13, name: "Saray", cuisine: "	Turks" },
            { id: 14, name: "Us Heit", cuisine: "Frans" },
            { id: 15, name: "El Toro", cuisine: "Spaans" },
            { id: 16, name: "Leeuwarden Lounge", cuisine: "Spaans" },
            { id: 17, name: "\'t Goede", cuisine: "Hollands" },
            { id: 18, name: "TOTT", cuisine: "Wereldkeuken" },
            { id: 19, name: "De Vrouwenpoort", cuisine: "Regionaal" },
            { id: 20, name: "Onder de kelders", cuisine: "Wereldkeuken" },
        ];
    }
}