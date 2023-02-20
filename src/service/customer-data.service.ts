import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private customerURL = environment.customerURL
  public reloadList = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  public getCustomer() {
    return this.http.get(`${this.customerURL}`)
  }

  public getCustomerById(id: number) {
    return this.http.get(`${this.customerURL}/${id}`)
  }

  public createCustumer(value: any) {
    return this.http.post(`${this.customerURL}`, value)
  }

  public updateCustomer(id: number, value: any) {
    return this.http.put(`${this.customerURL}/${id}`, value)
  }

  public deleteCustomer(id: number) {
    return this.http.delete(`${this.customerURL}/${id}`)
  }

}
