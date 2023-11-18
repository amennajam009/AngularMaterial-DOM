import { AngularMaterialCommunicationService } from './../angular-material-communication.service';
import { AngularBootstrapCommunationService } from './../../angular-bootstrap/shared/angular-bootstrap-communation.service';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
export interface UserData {
  id: number;
  name: string;
  progress: string;
}
@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent {
  constructor(private _dialogue:MatDialog,
              private AngularMaterialCommunicationService:AngularMaterialCommunicationService) { 
}

ngOnInit(): void {

  console.log('dataaaaaaaaaaaaa',this.AngularMaterialCommunicationService.getMyStateData())
}

displayedColumns: string[] = ['id', 'name', 'progress'];
dataSource: UserData[] = [
  { id: 1, name: 'John', progress: '20%' },
  { id: 2, name: 'Doe', progress: '40%' },
  { id: 3, name: 'Smith', progress: '60%' },
];
openAddStaff(){
const dialogueRef =  this._dialogue.open(AddUserFormComponent)

  dialogueRef.afterClosed()?.subscribe(() => {

    // The dialog was closed with a result (assuming it's the data you need)
    console.log('dataaaaaaaaaaaaa', this.AngularMaterialCommunicationService.getMyStateData());

});

}
}
