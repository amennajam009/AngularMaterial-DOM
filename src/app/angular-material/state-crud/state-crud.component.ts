import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

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


openAddStaff(){
  this._dialogue.open(AddUserFormComponent)
}
}
