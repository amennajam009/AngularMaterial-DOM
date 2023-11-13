import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {
  constructor(private _dialogue:MatDialog) { 
  }
  
  ngOnInit(): void {
  }

  close(){
    this._dialogue.closeAll()
  }
}
