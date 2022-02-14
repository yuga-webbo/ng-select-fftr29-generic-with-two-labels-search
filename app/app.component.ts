import { Component, NgModule, ViewChild, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  FormBuilder
} from "@angular/forms";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import { Account } from "./Account";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";

@Component({
  selector: "my-app",
  template: `
    <app-generic-select
      [availableItems]="availableAccounts"
      [control]="accountControl"
      [itemSearchFields]="['name', 'country']"
      [printContent]="accountText"
    >
    </app-generic-select>
    {{ accountForm.value | json }}
  `
})
export class AppComponent implements OnInit {
  accountForm: FormGroup;

  availableAccounts: Account[] = [];
  delayedObservable = Observable.of(this.getTestAccounts()).delay(3000);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      accounts: [[], []]
    });
    this.delayedObservable.subscribe(
      accounts => (this.availableAccounts = accounts)
    );
  }

  get accountControl(): FormControl {
    return this.accountForm.get("accounts") as FormControl;
  }

  accountText = (item: Account): string => {
    return item.name + " - " + item.country;
  };

  getTestAccounts(): Account[] {
    return [
      {
        name: "Adam",
        email: "adam@email.com",
        age: 12,
        country: "United States"
      },
      {
        name: "Samantha",
        email: "samantha@email.com",
        age: 30,
        country: "United States"
      },
      {
        name: "Amalie",
        email: "amalie@email.com",
        age: 12,
        country: "Argentina"
      },
      {
        name: "Estefanía",
        email: "estefania@email.com",
        age: 21,
        country: "Argentina"
      },
      {
        name: "Adrian",
        email: "adrian@email.com",
        age: 21,
        country: "Ecuador"
      },
      {
        name: "Wladimir",
        email: "wladimir@email.com",
        age: 30,
        country: "Ecuador"
      },
      {
        name: "Natasha",
        email: "natasha@email.com",
        age: 54,
        country: "Ecuador"
      },
      {
        name: "Nicole",
        email: "nicole@email.com",
        age: 43,
        country: "Colombia"
      },
      {
        name: "Michael",
        email: "michael@email.com",
        age: 15,
        country: "Colombia"
      },
      {
        name: "Nicolás",
        email: "nicole@email.com",
        age: 43,
        country: "Colombia"
      }
    ];
  }
}
