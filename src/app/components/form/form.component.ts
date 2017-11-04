import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  categories = [
    { id: 1, name: 'development'},
    { id: 2, name: 'art'},
    { id: 3, name: 'languages'}
  ];

  submit(value) {
    console.log(value);
    
  }

}
