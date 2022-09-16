import { startWith, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';


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
  myControl = new FormControl('');
  options: string[] = [`Mech`, `Civil`, `Cse`, `Ece`, `EEE`, `Ite`];

  filteredOptions?: Observable<string[]>;


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
      Language:["", Validators.required],
      date:[null, Validators.required],
      time:["",Validators.required],
      bank:['',Validators.required]

    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
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
      date:"2022-09-27T18:30:00.000Z",
      time:"6:00 AM",
      bank:["Mech"],
    })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
