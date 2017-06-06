import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['bookings.component.scss']
})
export class BookingsComponent{
    user;
    constructor (private userService: UserService) {
        this.user = userService.getUser();
    }
}