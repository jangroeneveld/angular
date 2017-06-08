import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {
    getRestaurants() {
        return [
            {title: "Restaurants", subtitle: "Eten en drinken", link: "/activity", imgUrl: "http://hoevetwed.nl/wp-content/uploads/restaurant-in-omgeving.jpg"},
            {title: "Wateractiviteiten", subtitle: "Natte pret", link: "/activity", imgUrl: "http://begovic-boarding-house.com/wp-content/uploads/2015/05/Marmaris_Watersports_28.jpg"},
		    {title: "Kindvriendelijk", subtitle: "Voor de kleintjes", link: "/activity", imgUrl: "https://www.provencevakantiewoningen.nl/uploads/ckeditor/pictures/29/content_voorkinderen.jpg"},
		    {title: "Sportief", subtitle: "Lichaamsbeweging", link: "/activity", imgUrl: "http://www.happysauerland.nl/images/sportief.jpg"},
            {title: "Cultuur", subtitle: "Beleven", link: "/activity", imgUrl: "http://www.cda-utrecht.nl/wp-content/uploads/Culturele-Zondag-Utrecht-Flickr-Pim-Geerts-by-nc-nd-2-0.jpg"},
            {title: "Fietsen", subtitle: "De omgeving zien", link: "/activity", imgUrl: "http://www.arrangementen-uden-maashorst.nl/files/images/fietsen.jpg"},
            {title: "Shoppen", subtitle: "Shopaholics", link: "/activity", imgUrl: "http://www.knack.be/medias/11453/5864045.jpg"},
            {title: "Uitgaan", subtitle: "Tot in de kleine uurtjes", link: "/activity", imgUrl: "https://imgserv3.tcdn.nl/v1/M8-DBJ0GinH0uQLmaSJvoCIfd3k=/704x398/smart/http://metronieuws.tcdn.nl/field/image/b65d5c1d3d2762ce6ef584cfc63f2110-1443687549.jpg"},
            {title: "Dagje weg", subtitle: "Iets verder in de omgeving", link: "/activity", imgUrl: "https://www.blauwelint.nl/media/djcatalog2/images/category/0/dagje-weg-in-groningen_f.jpg"},
            {title: "Excursies", subtitle: "Spannend", link: "/activity", imgUrl: "https://www.jetblue.com/img/vacations/destination/St.-Lucia-Mountain-960-x-420.jpg"},
            {title: "Dagje weg", subtitle: "Iets verder in de omgeving", link: "/activity", imgUrl: "https://www.jetblue.com/img/vacations/travelstyles/AllInclusive/All_Inc_960x420.jpg"},
            {title: "Excursies", subtitle: "Spannend", link: "/activity", imgUrl: "http://onlinelearningtips.com/wp-content/uploads/sites/15/2013/10/taking-a-vacation-in-the-middle-of-a-class.jpg"}
        ];
    }
}