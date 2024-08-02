import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  frm : FormGroup;
  constructor(private formBuilder : FormBuilder){
      this.frm = formBuilder.group({
        name : ["",[Validators.minLength(5),Validators.required]],
        surname : [""],
        email : [""],
        tel : [""],
      })
  }

  get name(){
    return this.frm.get("name")
  }

  onSubmit(data){
     console.log(this.frm.value);
     
  }
}
