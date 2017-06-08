import { Component } from '@angular/core';

@Component({
    selector: 'option-details',
    templateUrl: './details.component.html',
    styleUrls: [ './details.component.scss']
})
export class DetailsComponent{
    details;
    constructor(){
        this.details = {
            name: "Restaurantnaam",
            quote: "Ik heb nog nooit zo lekker gegeten",
            phone: "06-12345678",
            website: "www.restaurant.nl",
            address: "rengerslaan 29, Leeuwarden",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            reviews: [
                {
                    picture: "red",
                    name: "John Doe",
                    rating: 2.9,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  mollit anim id est laborum"
                },{
                    picture: "yellow",
                    name: "John Did",
                    rating: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },{
                    picture: "green",
                    name: "John Done",
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                },{
                    picture: "hotpink",
                    name: "Jane Doe",
                    rating: 3,
                    text: "Lorem ipsum dolor sit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                }
            ]
        }
    }

    goBack = () => {
        window.history.back();
    }

    openWebpage = () => {
        if (!/^(f|ht)tps?:\/\//i.test(this.details.website)) {
            window.open("http://" + this.details.website);
        } else {
            window.open(this.details.website);
        }
    }

    openMaps = () => {
        window.open("https://maps.google.com/maps?daddr=" + this.details.address);
    }
}