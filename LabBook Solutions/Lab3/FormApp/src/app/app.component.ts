import { Component } from '@angular/core';
import {Form} from '@angular/Forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormApp';
  productCategory = ['Grocery','Mobile','Electonics','Cloths'];
  
}
