import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(
    private dialog: MatDialog
  ) { }

  public showConfirm( title: string, msg: string, cancelTxt?: string, confirmTxt?: string ){
    const modalInstance = this.dialog.open(ConfirmPopupComponent, {});
    modalInstance.componentInstance.title = title;
    modalInstance.componentInstance.msg = msg;
    modalInstance.componentInstance.cofirmPopup = new Subject<boolean>();
    if(confirmTxt){
      modalInstance.componentInstance.confirmTxt = confirmTxt;
    }
    if(cancelTxt){
      modalInstance.componentInstance.cancelTxt = cancelTxt;
    }
    return modalInstance.componentInstance.cofirmPopup
  }

}
