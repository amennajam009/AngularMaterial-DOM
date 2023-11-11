import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent {
  StateValues: any = [] = []
  UserFrom: FormBuilder | any
  i: any | number
  


constructor(private FormBuilder:FormBuilder) { 
  this.userFromModel()
}

ngOnInit(): void {

}

userFromModel(){
  this.UserFrom = this.FormBuilder.group({
    name: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required]),
    first_name: new FormControl ('',[Validators.required,]),
    last_name: new FormControl ('',[Validators.required,]),
    address: new FormControl ('',[Validators.required,]),
    city: new FormControl ('',[Validators.required,]),
    country: new FormControl ('',[Validators.required,]),
    pin_code: new FormControl ('',[Validators.required,]),
    about_me: new FormControl ('',[Validators.required,]),
    select1: new FormControl ('',[Validators.required,]), 
    select2: new FormControl ('',[Validators.required,])  
  })
}


Submit(){
  const formValues = this.UserFrom.value
  this.StateValues.push(formValues)
  console.log('formvalues',this.StateValues)
}

deleteStateValueByIndex(i:number){
 this.StateValues.splice(i,1)
}

}
