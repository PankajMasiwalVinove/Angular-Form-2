import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registratoinForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required , Validators.email]),
    phone : new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    gender : new FormControl('',[Validators.required]),
    address : new FormGroup({
      state : new FormControl('',[Validators.required]),
      city : new FormControl('',[Validators.required]),
      pinCode : new FormControl('',[Validators.required]),
    })
  })

  formGroup(){
    console.log("afasdfdf",this.registratoinForm.value);
  }

  reset(){
    this.registratoinForm.reset();
  }

}
