export class UserModel {
    mainUser: PersonModel;
    userCompany: Array<PersonModel>;
    cars: Array<string>;
    bookings: Array<any>;
    constructor( mainUser: PersonModel, userCompany: Array<PersonModel>, cars: Array<string>, bookings: Array<any>){
        this.mainUser = mainUser;
        this.userCompany = userCompany;
        this.cars = cars;
        this.bookings = bookings;
        return this;
    }
}

export class PersonModel {
    firstName: string = "John";
    lastName: string = "Doe"
    age: number = 0;
    sex: string = "M";
    constructor(firstName: string, lastName: string, age: number = 0, sex: string = "M"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
        return this;
    }
}