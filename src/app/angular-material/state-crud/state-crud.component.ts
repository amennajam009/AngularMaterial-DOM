import { AngularMaterialCommunicationService } from './../angular-material-communication.service';
import { AngularBootstrapCommunationService } from './../../angular-bootstrap/shared/angular-bootstrap-communation.service';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent {
  UserListData: any
  constructor(private _dialogue:MatDialog,
              private AngularMaterialCommunicationService:AngularMaterialCommunicationService) { 
}

ngOnInit(): void {

}

//Not working 
MyUserList(){
  this.AngularMaterialCommunicationService.getMyStateData()
}



openAddStaff(){
const dialogueRef =  this._dialogue.open(AddUserFormComponent)

  dialogueRef.afterClosed()?.subscribe(() => {
   this.UserListData =  this.AngularMaterialCommunicationService.getMyStateData()
    console.log('dataaaaaaaaaaaaa', this.UserListData);
});
}

deleteUserData(i:any){
  console.log('idex',i)
  this.UserListData.splice(i,1)
}


UpdateStaff(data:object , i :number){
  const dialogueRef =  this._dialogue.open(AddUserFormComponent , {
    data:{
      EditData:data,
      index:i
    }
  })
  
    dialogueRef.afterClosed()?.subscribe(() => {
     this.UserListData =  this.AngularMaterialCommunicationService.getMyStateData()
      console.log('dataaaaaaaaaaaaa', this.UserListData);
  });
  }
}
