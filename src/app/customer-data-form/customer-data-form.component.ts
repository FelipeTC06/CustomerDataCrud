import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDataService } from 'src/service/customer-data.service';

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.scss']
})
export class CustomerDataFormComponent implements OnInit {

  public form!: FormGroup;
  public id!: number
  public editdata: any


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerDataService,
    private dialogRef: MatDialogRef<CustomerDataFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  public ngOnInit(): void {
    this.createForm()
    if(this.data.id != null && this.data.id != ''){
      this.loadEditData(this.data.id)
    }
  }

  public createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      birthday: [null, Validators.required],
      phone: [null, Validators.required]
    })
  }

  public loadEditData(id: any) {
    this.customerService.getCustomerById(id).subscribe((item) => {
    this.form.patchValue(item)
    })
}
  public saveCustomer() {
    const value = this.form.value;
    if (this.data.id) {
      this.customerService.updateCustomer(this.data.id, value).subscribe(
        {
          error: (e) => console.log(e),
          next: () => this.closeModal(),
          complete: () => this.customerService.reloadList.emit()
        }
      )
    } else {
      this.customerService.createCustumer(value).subscribe(
        {
          error: (e) => console.log(e),
          next: () => this.closeModal(),
          complete: () => this.customerService.reloadList.emit()
        }
      )
    }
  }

  public closeModal(){
    this.dialogRef.close();
    this.form.reset()
  }

}
