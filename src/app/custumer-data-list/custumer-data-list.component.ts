import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDataService } from 'src/service/customer-data.service';
import { CustomerDataFormComponent } from '../customer-data-form/customer-data-form.component';

@Component({
  selector: 'custumer-data-list',
  templateUrl: './custumer-data-list.component.html',
  styleUrls: ['./custumer-data-list.component.scss']
})
export class CustumerDataListComponent implements OnInit {

  public customers!: any[]
  public customerValue: any

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerDataService,
  ) { }

  public ngOnInit(): void {
    this.getCustomer()
    this.customerService.reloadList.subscribe(() => this.getCustomer())
  }

  public openDialog(id: any): void {
    this.dialog.open(CustomerDataFormComponent, {
      data: {
        id: id
      }
    });
  }

  public getCustomer(){
    this.customerService.getCustomer().subscribe((res: any) => {
      this.customers = res
    })
  }

  public editCustomer(id: number){
    this.openDialog(id)
  }

  public deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(
      {
        error: (e) => console.log(e),
        complete: () => this.getCustomer()
      }
    )
  }

}
