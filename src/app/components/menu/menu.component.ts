import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { MenuService } from 'src/app/services/menu.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  

  constructor(private MenuService: MenuService) { }

   breakfast!: Array<Item>;
   desserts!: Array<Item>;
   meals!: Array<Item>;

  ngOnInit(): void {
    this.getMenu();

  }

  getMenu(){
    this.MenuService.getBreakfast().subscribe(Breakfast => {
      this.breakfast = Breakfast;
    });
    this.MenuService.getDesserts().subscribe(Desserts => {
      this.desserts = Desserts;
    });
    this.MenuService.getMeals().subscribe(Meals => {
      this.meals = Meals;
      this.consoleLog();
    });
  }

  consoleLog(){
    console.log(this.breakfast);
    console.log(this.desserts);
    console.log(this.meals);
  }
  
}
