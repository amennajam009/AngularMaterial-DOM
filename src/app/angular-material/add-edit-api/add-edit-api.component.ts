import { Component } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MaterialServiceService } from '../shared/material-service.service';

@Component({
  selector: 'app-add-edit-api',
  templateUrl: './add-edit-api.component.html',
  styleUrls: ['./add-edit-api.component.css']
})
export class AddEditApiComponent {
userCreate:FormGroup | any

  constructor(private _dialogue:MatDialog,
              private formBuilder:FormBuilder,
              private angularService:MaterialServiceService){
                this.userFormModel()
  }


  close(){
   this._dialogue.closeAll()
  }

  userFormModel(){
    this.userCreate = this.formBuilder.group({
      first_name: new FormControl ('',[Validators.required]),
      last_name: new FormControl ('',[Validators.required]),
      status_id: new FormControl ('',[Validators.required]),
    })
  }

  getFormData(){
    if (this.userCreate.invalid) {
      console.log('if is working')
      this.touchFormControls()
      return;
    }
    const formValues = this.userCreate.value;
     const payLoad = {
       first_name:formValues?.first_name,
       last_name:formValues?.last_name,
       status_id: formValues?.status_id ? 1 : 0
     }
     return payLoad
  }

  touchFormControls() {
    Object.keys(this.userCreate.controls).forEach(key => {
      this.userCreate.get(key)?.markAsTouched();
    });
  }

  saveFormData(){
   this.angularService.userCreate(this.getFormData()).subscribe((res:any)=>{
     res
   })
  }


}
