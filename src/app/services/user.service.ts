import { Injectable } from '@angular/core';
import { PersonModel, UserModel } from '../models/UserModels';

@Injectable()
export class UserService {
    getUser() {
        return  new UserModel(
            new PersonModel("Toon", "Verberg", 24),
            [
                new PersonModel("Inez", "Verberg", 22),
                new PersonModel("Aine", "Verberg", 3),
                new PersonModel("André", "Verberg", 1)
            ],
            ["AU-TO-01"],
            []
        )
    }
}