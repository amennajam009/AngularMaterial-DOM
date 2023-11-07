import { Component } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';

@Component({
  selector: 'app-crud-listing',
  templateUrl: './crud-listing.component.html',
  styleUrls: ['./crud-listing.component.css']
})
export class CrudListingComponent {


  constructor(private bootStrapService:BootstrapServiceService) { }
  
  ngOnInit(): void {
    this.getUserData()
  }



  //get UserData
getUserData(){
  this.bootStrapService.getUserData().subscribe((res:any)=>{
    res
  })
}
}
