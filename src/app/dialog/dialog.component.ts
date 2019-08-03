import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  fullname: string
  image: string
  join_date: number
  twubric: { total: number, friends: number, influence: number, chirpiness: number }
  uid: number
  username: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
