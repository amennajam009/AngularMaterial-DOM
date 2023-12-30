import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditApiComponent } from '../add-edit-api/add-edit-api.component';
import { MaterialServiceService } from '../shared/material-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  userData: any;

   constructor(private _dialogue:MatDialog,
               private angularService:MaterialServiceService){
   }

   dataSource: any[] = [
    { position: 1, name: 'John Doe', weight: 70, symbol: 'J' },
    { position: 2, name: 'Jane Smith', weight: 65, symbol: 'S' },
    // Add more rows as needed
  ];

   ngOnInit(): void {
    this.getUserData()
   }

   addUser(){
    this._dialogue.open(AddEditApiComponent , {
    width:'600px',
    height:'600px'
    })
   }

   //get User Data

   getUserData(){
    this.angularService.getUserData().subscribe((res:any)=>{
      res
      this.userData = res?.data
      console.log('userrrrrrrrr',this.userData)
    })
   }
}
