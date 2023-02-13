import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.scss']
})
export class CustomerDataFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      birthday: [null, Validators.required],
      phone: [null, Validators.required]
    })
  }

}
