import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	  constructor(public dialog: MdDialog) {}

  title = 'app works!';
  carteleras = ["CADP","AyED","TTPS Java", "Organización de computadoras"];
  color = 'accent';
  checked = false;
  disabled = false;

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {}

