import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  constructor() {}

  //Searches only by name - not used
  filterItemsByName(items, searchTerm) {
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  //Searches by name and surname - not used
  filterItemsByNameAndSurname(items, searchTerm) {
    return items.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }

  //Searches items by any parameters
  filterItemsByParameters(items, searchTerm, parameters) {
    return items.filter((item) => {
      let isFound = false;
      parameters.forEach((parameeter) => {
        if (typeof item[parameeter] === "string") {
          if (
            item[parameeter].toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1
          ) {
            isFound = true;
          }
        } else if (typeof [parameeter] === "number") {
          if (item[parameeter].indexOf(searchTerm) > -1) {
            isFound = true;
          }
        }
      });
      return isFound;
    });
  }
}
