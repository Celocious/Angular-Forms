import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string = "Register here";
  loginForm: FormGroup | any;
  show: boolean = false;
  data:any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name:["",[Validators.required, Validators.pattern('[A-Za-z]+$'), Validators.minLength(4)]],
      fullname:[""],
      username:["", [Validators.required, Validators.pattern('[A-Za-z]+$'), Validators.maxLength(6)]],
      password:["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email:["", [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      gender:["", [Validators.required]],
      horror:false,
      Action:false,
      Romance:false,
      ScienceFiction: false,
      Adventure: false,
      start:null,
      End:null,
      Language:["", Validators.required]

    })
  }
  onSubmit(){
   console.log(this.loginForm.value)
   this.data = this.loginForm.value 
  }

  AutoValue(){
    this.loginForm.patchValue({
      name:"Testing",
      fullname:"Testing",
      username:"Test",
      password:"Anyfvre",
      email:"demo@gmail.com",
      gender:"male",
      horror:true,
      Language:"Tamil",
    })
  }

  get name(){
    return this.loginForm.get("name")
  }
  get username(){
    return this.loginForm.get("username")
  }
  get password(){
    return this.loginForm.get("password")
  }
  get email(){
    return this.loginForm.get("email")
  }

  get gender(){
    return this.loginForm.get("gender")
  }

  hide(){
    this.show = !this.show
  }
}
