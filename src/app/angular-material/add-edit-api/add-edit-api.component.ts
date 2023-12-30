import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-api',
  templateUrl: './add-edit-api.component.html',
  styleUrls: ['./add-edit-api.component.css']
})
export class AddEditApiComponent {


  constructor(private _dialogue:MatDialog,){
  }


  close(){
   this._dialogue.closeAll()
  }
}
