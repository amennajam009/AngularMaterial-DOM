import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';

@Component({
  selector: 'app-crud-main',
  templateUrl: './crud-main.component.html',
  styleUrls: ['./crud-main.component.css']
})
export class CRUDMainComponent {

  UserFrom: FormBuilder | any


constructor(private FormBuilder:FormBuilder,
  private bootStrapService:BootstrapServiceService,) { 
  this.userFromModel()
}

ngOnInit(): void {
this.getSavedVariablesData()
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


getSavedVariablesData(){
  this.bootStrapService.getSavedVariablesData().subscribe((res:any)=>{
    res
  })
}
Submit(){
const CreateUserData = this.UserFrom.value;
this.bootStrapService.createUserData(CreateUserData).subscribe((res:any)=>{
  if(this.UserFrom){
    alert("Form Submit Succesfully")
    this.UserFrom.reset()
  }
  else{
    alert("Please Fill All the Fields")
  }
})
}


}
