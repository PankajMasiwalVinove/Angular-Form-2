import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');

  formControl(){
    console.log(this.name.value);
  }
}
