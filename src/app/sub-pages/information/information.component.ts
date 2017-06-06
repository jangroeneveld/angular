import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'information',
    templateUrl: './information.component.html',
    styleUrls: ['information.component.scss']
})
export class InformationComponent{
    user;
    constructor (private userService: UserService) {
        this.user = userService.getUser();
    }
}