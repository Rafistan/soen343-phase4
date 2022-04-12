import { Component, OnInit } from '@angular/core';
import {PeriodicElement} from "../order-product/order-product.component";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydro Flask', price: 18.99},
  {position: 2, name: 'Cap', price: 25.99},
  {position: 3, name: 'Total', price: 45.98},
];

@Component({
  selector: 'app-current-order-page',
  templateUrl: './current-order-page.component.html',
  styleUrls: ['./current-order-page.component.css']
})
export class CurrentOrderPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit(): void {
  }

}
