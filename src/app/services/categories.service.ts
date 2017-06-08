import { Injectable } from '@angular/core';
var categories = require('./categories.json');

@Injectable()
export class CategoriesService {
    categories: Array<any>;
    getCategories = () => {
        return categories;
    }
}