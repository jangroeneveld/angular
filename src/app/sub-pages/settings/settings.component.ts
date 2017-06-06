import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['settings.component.scss']
})
export class SettingsComponent{
    user;
    constructor (private userService: UserService) {
        this.user = userService.getUser();
    }
}