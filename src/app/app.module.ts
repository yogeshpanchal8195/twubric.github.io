import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatCommonModule,
  MatInputModule
} from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatCommonModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
