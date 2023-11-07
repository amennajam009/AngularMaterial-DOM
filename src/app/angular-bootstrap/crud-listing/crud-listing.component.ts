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
 updatedvalues:any = []
 UserUpdateFrom: FormBuilder | any
  constructor(private bootStrapService:BootstrapServiceService,
              private FormBuilder:FormBuilder) { 
    this.userUpdateFromModel()
  }
  
  ngOnInit(): void {
    this.getUserData()
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

userUpdateFromModel(){
  this.UserUpdateFrom = this.FormBuilder.group({
    name: new FormControl (this.UserDatalist?.name,[Validators.required]),
    email: new FormControl (this.UserDatalist?.email,[Validators.required]),
    first_name: new FormControl (this.UserDatalist?.first_name,[Validators.required,]),
    last_name: new FormControl (this.UserDatalist?.last_name,[Validators.required,]),
    address: new FormControl ('',[Validators.required,]),
    city: new FormControl ('',[Validators.required,]),
    country: new FormControl ('',[Validators.required,]),
    pin_code: new FormControl ('',[Validators.required,]),
    about_me: new FormControl ('',[Validators.required,]),
    select1: new FormControl ('',[Validators.required,]), 
    select2: new FormControl ('',[Validators.required,])  
  })
}


}
