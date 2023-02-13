import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDataFormComponent } from '../customer-data-form/customer-data-form.component';

@Component({
  selector: 'custumer-data-list',
  templateUrl: './custumer-data-list.component.html',
  styleUrls: ['./custumer-data-list.component.scss']
})
export class CustumerDataListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(CustomerDataFormComponent, {});
  }

}
