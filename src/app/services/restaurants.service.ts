import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {
    getRestaurants() {
        return [
            {title: "Restaurants", subtitle: "Eten en drinken", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Wateractiviteiten", subtitle: "Natte pret", link: "/activity", imgUrl: "img/restaurants.jpg"},
		    {title: "Kindvriendelijk", subtitle: "Voor de kleintjes", link: "/activity", imgUrl: "img/restaurants.jpg"},
		    {title: "Sportief", subtitle: "Lichaamsbeweging", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Cultuur", subtitle: "Beleven", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Fietsen", subtitle: "De omgeving zien", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Shoppen", subtitle: "Shopaholics", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Uitgaan", subtitle: "Tot in de kleine uurtjes", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Dagje weg", subtitle: "Iets verder in de omgeving", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Excursies", subtitle: "Spannend", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Dagje weg", subtitle: "Iets verder in de omgeving", link: "/activity", imgUrl: "img/restaurants.jpg"},
            {title: "Excursies", subtitle: "Spannend", link: "/activity", imgUrl: "img/restaurants.jpg"}
        ];
    }
}