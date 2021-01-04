import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
   
  }

  filterItemsByName(items, searchTerm) {
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterItemsByNameAndSurname(items, searchTerm) {
    return items.filter(item => {
      console.log(item.surname + " - " + searchTerm);
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
