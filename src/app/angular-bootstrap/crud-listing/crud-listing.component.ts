import { Component } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-listing',
  templateUrl: './crud-listing.component.html',
  styleUrls: ['./crud-listing.component.css']
})
export class CrudListingComponent {
 UserDatalist:any = []
 DataById:any = []
 newVar: any
 UserUpdateFrom: FormBuilder | any
  constructor(private bootStrapService:BootstrapServiceService,
              private FormBuilder:FormBuilder) { 
  this.updateFormModal()
  }
  
  ngOnInit(): void {
    this.getUserData()
    this.mymethod()
  }



  //get UserData
getUserData(){
  this.bootStrapService.getUserData().subscribe((res:any)=>{
    this.UserDatalist = res
  })
}


//delete UserDataById
deleteUserDataById(id:any){
  this.bootStrapService.deleteUserData(id).subscribe((res:any)=>{
    if(id){
      alert("You sure You want to Delete UserData")
    }
    else{
      alert("Id Not Exist")
    }
    this.UserDatalist = this.UserDatalist?.filter((list: any) => list.id !== id);
  })
}

updateFormModal(){
  this.UserUpdateFrom = this.FormBuilder.group({
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

mymethod(){
  const myobject = {
      name: 'amen',
      age: 21,
      education: 'matric'
   }
   const {name,age} = myobject
   this.newVar = {name,age}
  //  console.log(this.newVar)
  const myArray = ['singleElement' , 'amen' , 'blah'];
const element = myArray.join();
console.log( element);
 }


getUpdateFromModel(id:any){
  this.bootStrapService.getById(id).subscribe((res:any)=>{
  this.DataById = res;
  this.UserUpdateFrom = this.FormBuilder.group({
    name: new FormControl (this.DataById?.name,[Validators.required]),
    email: new FormControl (this.DataById?.email,[Validators.required]),
    first_name: new FormControl (this.DataById?.first_name,[Validators.required,]),
    last_name: new FormControl (this.DataById?.last_name,[Validators.required,]),
    address: new FormControl (this.DataById?.address,[Validators.required,]),
    city: new FormControl (this.DataById?.city,[Validators.required,]),
    country: new FormControl (this.DataById?.country,[Validators.required,]),
    pin_code: new FormControl (this.DataById?.pin_code,[Validators.required,]),
    about_me: new FormControl (this.DataById?.about_me,[Validators.required,]),
    select1: new FormControl (this.DataById?.select1,[Validators.required,]), 
    select2: new FormControl (this.DataById?.select2,[Validators.required,])  
  })
  })
}

}


