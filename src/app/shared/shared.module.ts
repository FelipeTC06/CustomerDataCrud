import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';



@NgModule({
  declarations: [
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [ConfirmPopupComponent]
})
export class SharedModule { }
