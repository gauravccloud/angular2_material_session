import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';



@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}
}
