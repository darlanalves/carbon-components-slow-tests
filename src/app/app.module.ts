import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule, DialogModule, PaginationModule, TableModule } from 'carbon-components-angular';
import { LoadingModule } from 'carbon-components-angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule,
    DialogModule,
    PaginationModule,
    TableModule,
    LoadingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
