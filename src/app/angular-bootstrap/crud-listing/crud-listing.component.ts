import { Component } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';

@Component({
  selector: 'app-crud-listing',
  templateUrl: './crud-listing.component.html',
  styleUrls: ['./crud-listing.component.css']
})
export class CrudListingComponent {
 UserDatalist:any = []

  constructor(private bootStrapService:BootstrapServiceService) { }
  
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
}
