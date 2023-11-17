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
  constructor(private _dialogue:MatDialog) { 
}

ngOnInit(): void {
}

displayedColumns: string[] = ['id', 'name', 'progress'];
dataSource: UserData[] = [
  { id: 1, name: 'John', progress: '20%' },
  { id: 2, name: 'Doe', progress: '40%' },
  { id: 3, name: 'Smith', progress: '60%' },
];
openAddStaff(){
  this._dialogue.open(AddUserFormComponent)
}
}
