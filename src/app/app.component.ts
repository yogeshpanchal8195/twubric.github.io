import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Renderer2, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';


export interface DialogData {
  fullname: string
  image: string
  join_date: number
  twubric: { total: number, friends: number, influence: number, chirpiness: number }
  uid: number
  username: string;
}

@Component({
  selector: 'app-root',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Twubric';
  dataList: Array<any> = [];
  copyDataList: Array<any> = [];
  startDate: Date
  endDate: Date;
  dailogOpened: boolean
  selectedSort: number
  constructor(private httpService: HttpClient, private renderer: Renderer2, public dialog: MatDialog) { }

  ngOnInit() {

    this.httpService.get('./assets/TwubricData.json').subscribe(
      data => {
        this.dataList = data as [];
        this.copyDataList = JSON.parse(JSON.stringify(this.dataList));
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  hotkeys(event) {
    if (this.dailogOpened)
      return
    console.log(event.keyCode);

    if (event.keyCode == 97 || event.keyCode == 49) {
      this.sortBy('total', 1);
    }
    if (event.keyCode == 98 || event.keyCode == 50) {
      this.sortBy('friends', 2);
    }
    if (event.keyCode == 99 || event.keyCode == 51) {
      this.sortBy('influence', 3);
    }
    if (event.keyCode == 100 || event.keyCode == 52) {
      this.sortBy('chirpiness', 4);
    }
  }

  sortBy(detail: string, num: number) {
    if (this.dailogOpened)
      return
    this.selectedSort = num;
    this.dataList.sort((a, b) => a.twubric[detail] - b.twubric[detail]);
  }

  change(event, num) {
    if (this.dailogOpened)
      return
    // console.log(a);
    if (num == 1) {
      this.startDate = new Date(event.target.valueAsNumber)
    } else {
      this.endDate = new Date(event.target.valueAsNumber)
    }
    if (this.startDate && this.endDate) {
      this.dataList = JSON.parse(JSON.stringify(this.copyDataList));
      this.dataList = this.dataList.filter((element) => element.join_date > this.startDate.getTime() && element.join_date < this.endDate.getTime())
    }
  }

  removeData(uid: number) {
    if (this.dailogOpened)
      return
    this.dataList.splice(this.dataList.findIndex(element => element.uid === uid), 1)
  }

  openDialog(input): void {
    if(this.dailogOpened)
    return
    this.dailogOpened = true
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
      panelClass: 'overlayClass',
      data: input
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dailogOpened = false;
      console.log('The dialog was closed');
    });
  }


}













