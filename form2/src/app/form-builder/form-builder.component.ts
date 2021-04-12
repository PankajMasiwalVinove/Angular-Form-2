import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {}



  ngOnInit(): void {
   this.generateForm();

  }

  generateForm(){
    this.registrationForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[ A-Za-z0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', [Validators.required]],
      address: this.FormBuilder.group({
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        pinCode: ['', [Validators.required]]
      })
    })
  }

  name: string = '';


check(){
  console.log(this.registrationForm.get("name"));
}

  formBuilder() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
  }

  reset() {
    this.registrationForm.reset();
  }

}