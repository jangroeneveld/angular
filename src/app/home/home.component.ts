import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent{
    user;
    constructor (private userService: UserService) {
        this.user = userService.getUser();
    }
}