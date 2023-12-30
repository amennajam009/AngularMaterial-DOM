import { Component } from '@angular/core';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-api',
  templateUrl: './add-edit-api.component.html',
  styleUrls: ['./add-edit-api.component.css']
})
export class AddEditApiComponent {
userCreate:FormBuilder | any

  constructor(private _dialogue:MatDialog,
              private formBuilder:FormBuilder){
                this.userFormModel()
  }


  close(){
   this._dialogue.closeAll()
  }

  userFormModel(){
    this.userCreate = this.formBuilder.group({
      first_name: new FormControl ('',[Validators.required,]),
      last_name: new FormControl ('',[Validators.required,]),
      status: new FormControl ('',[Validators.required,]),
    })
  }

  getFormData(){
    const formValues = this.userCreate.values;
     const payLoad = {
       first_name:formValues?.first_name,
       last_name:formValues?.last_name,
       status:1
     }
     return payLoad
  }

  


}
