import { Component, OnInit } from '@angular/core';
import { categoriesData } from '../categories-data';
import { Categories } from '../types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Categories[] = [];
  constructor() { }

  ngOnInit(): void {
    this.categoriesList = categoriesData;
  }

}
