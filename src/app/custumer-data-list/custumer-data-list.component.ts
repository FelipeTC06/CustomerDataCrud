import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CustomerDataService } from 'src/service/customer-data.service';
import { CustomerDataFormComponent } from '../customer-data-form/customer-data-form.component';
import { SharedServiceService } from '../shared/shared-service.service';

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
    private sharedService: SharedServiceService
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

  public getCustomer() {
    this.customerService.getCustomer().subscribe((res: any) => {
      this.customers = res
    })
  }

  public editCustomer(id: number) {
    this.openDialog(id)
  }

  public deleteCustomer(id: number) {
    const resultPopup$ = this.sharedService.showConfirm('Confirmação', 'Deseja deletar?');
    resultPopup$.asObservable().pipe(
      take(1),
      switchMap(resultPopup => resultPopup ? this.customerService.deleteCustomer(id) : EMPTY)
    ).subscribe(
      {
        error: (e) => console.log(e),
        complete: () => this.getCustomer()
      }
    )

  }

}
