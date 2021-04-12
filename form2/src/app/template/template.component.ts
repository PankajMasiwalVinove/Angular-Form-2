import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateForm(form:any){
    console.log(form.value.name);
    console.log(form.value.name);
    console.log(form.value.email);
    console.log(form.value.phone);
    console.log(form.value.gender);
    console.log(form.value.workAs);
    console.log(form.value.location);
    console.log(form.value.checked);
  }

}
