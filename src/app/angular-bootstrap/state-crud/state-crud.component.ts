import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent {
  StateValues: any = [] = []
  UserFrom: FormBuilder | any;
  UpdateFrom: FormBuilder | any;
  i: any | number
  selectedIndex: number | any;
  isEdit : boolean = false
  selectedUser:any


constructor(private FormBuilder:FormBuilder) { 
  this.userFromModel()
  this.UpdateFromModel()
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

UpdateFromModel(){
  this.UpdateFrom = this.FormBuilder.group({
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

updateEditValues(data: any, index: number) {
  console.log('Updating data:', data);
  console.log('Index:', index);

 this.selectedUser = this.StateValues[index];
 this.selectedIndex = index
  console.log('selectedUser', this.selectedUser);

  this.UpdateFrom.patchValue({
    name: this.selectedUser?.name,
    email: this.selectedUser?.email,
    first_name: this.selectedUser?.first_name,
    last_name: this.selectedUser?.last_name,
    address: this.selectedUser?.address,
    city: this.selectedUser?.city,
    country:this.selectedUser?.country,
    pin_code:this.selectedUser?.pin_code,
    about_me: this.selectedUser?.about_me,
    select1: this.selectedUser?.select1,
    select2: this.selectedUser?.select2,
  });
}

SubmitUpdated() {
  console.log(this.selectedIndex)
  let formValues = this.UpdateFrom.value;

  // this.selectedIndex = formValues
  this.StateValues[this.selectedIndex] = formValues
  console.log('hhhhh',this.selectedIndex)
  console.log('Updated StateValues:', this.StateValues);
}


}
