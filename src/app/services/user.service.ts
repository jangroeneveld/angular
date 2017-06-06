import { Injectable } from '@angular/core';
import { PersonModel, UserModel } from '../models/UserModels';

@Injectable()
export class UserService {
    user: UserModel;

    getUser() {
        return this.user ? this.user : new UserModel(
            new PersonModel("Toon", "Verberg", 34, "M"),
            [
                new PersonModel("Inez", "Verberg", 32, "F"),
                new PersonModel("Aine", "Verberg", 3, "F"),
                new PersonModel("André", "Verberg", 1, "M")
            ],
            ["AU-TO-01"],
            []
        )
    }
}