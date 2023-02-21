import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  @Input() title!: string;
  @Input() msg!: string;
  @Input() cancelTxt: string = 'Cancel'
  @Input() confirmTxt: string = 'Sim'


  @Input() public cofirmPopup!: Subject<boolean>;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // this.cofirmPopup = new Subject();
  }

  public onConfirm(){
    this.cofirmPopupAndClose(true);
  }

  public closePopup(){
    this.cofirmPopupAndClose(false);
  }

  private cofirmPopupAndClose(valeu: boolean){
    this.cofirmPopup.next(valeu);
    this.dialog.closeAll();
  }

}
