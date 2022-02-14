import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { GenericSelectComponent } from './generic-select.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgSelectModule, ReactiveFormsModule, CommonModule ],
  declarations: [ AppComponent, GenericSelectComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
