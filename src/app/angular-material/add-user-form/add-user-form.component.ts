import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {

  AngularMaterialForm: FormBuilder | any





  constructor(private _dialogue:MatDialog,
              private FormBuilder:FormBuilder) { 
                this.UserFormModel()
  }
  
  ngOnInit(): void {
  }


  UserFormModel(){
  this.AngularMaterialForm = this.FormBuilder.group({
    first_name: new FormControl ('',[Validators.required]),
    last_name: new FormControl ('',[Validators.required]),
    email_address: new FormControl ('',[Validators.required,]),
    education: new FormControl ('',[Validators.required,]),
    house_no: new FormControl ('',[Validators.required,]),
    last_name_2: new FormControl ('',[Validators.required,]),
    checkbox_1: new FormControl ('',[Validators.required,]),
    checkbox_2: new FormControl ('',[Validators.required,]),
    checkbox_3: new FormControl ('',[Validators.required,]),
    address: new FormControl ('',[Validators.required,]), 
    city: new FormControl ('',[Validators.required,]),
    country: new FormControl ('',[Validators.required,]),
    pin_code: new FormControl ('',[Validators.required,]),
    last_name_3: new FormControl ('',[Validators.required,]), 
    about_me: new FormControl ('',[Validators.required,])  
  })
  }

  close(){
    this._dialogue.closeAll()
  }
}
