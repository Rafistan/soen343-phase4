import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydro Flask', price: 18.99},
  {position: 2, name: 'Cap', price: 25.99},
  {position: 3, name: 'Bed', price: 459.99},
  {position: 4, name: 'Water Bottles', price: 12.99},
  {position: 5, name: 'Computer', price: 999.99},
  {position: 6, name: 'Pencil', price: 4.99}
];

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'price', 'go_to_product_detail'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
