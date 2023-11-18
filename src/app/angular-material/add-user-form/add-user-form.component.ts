import { AngularMaterialCommunicationService } from './../angular-material-communication.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {
  saveDataInState : any [] = []
  AngularMaterialForm: FormBuilder | any
  editData:any = null


  constructor(private _dialogue:MatDialog,
              private FormBuilder:FormBuilder,
              private AngularMaterialCommunicationService:AngularMaterialCommunicationService,
              @Inject(MAT_DIALOG_DATA) public data: any) { 
                this.editData = this.data? this.data.EditData : null;
                this.UserFormModel()
  }
  
  ngOnInit(): void {
  console.log('dataToGettt',this.editData)
  if(this.editData){
    this.setMyEditData(this.editData)
  }
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

  MyPayLoad(){
    const formValues = this.AngularMaterialForm.value;
    console.log('myFormValeus',formValues)
    const payload:any = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email_address: formValues.email_address,
      education: formValues.education,
      house_no: formValues.house_no,
      last_name_2: formValues.last_name_2,
      checkbox_1: formValues.checkbox_1,
      checkbox_2: formValues.checkbox_2,
      checkbox_3: formValues.checkbox_3,
      address: formValues.address,
      city: formValues.city,
      country: formValues.country,
      pin_code: formValues.pin_code,
      last_name_3:formValues.last_name_3, 
      about_me:formValues.about_me,
    }
    return payload
  }

  setMyEditData(data:any){
    this.AngularMaterialForm.patchValue({
      first_name: data?.first_name,
      last_name: data?.last_name,
      email_address: data?.email_address,
      education: data?.education,
      house_no: data?.house_no,
      last_name_2: data?.last_name_2,
      checkbox_1: data?.checkbox_1,
      checkbox_2: data?.checkbox_2,
      checkbox_3: data?.checkbox_3,
      address: data?.address,
      city: data?.city,
      country: data?.country,
      pin_code: data?.pin_code,
      last_name_3:data?.last_name_3, 
      about_me:data?.about_me,
    })
  }
  Submit(){
    if(!this.editData){
      const formValues = this.MyPayLoad()
      this.saveDataInState.push(formValues)
      this.AngularMaterialCommunicationService.saveMyStateData(this.saveDataInState)
      console.log('storingDataInState' , this.saveDataInState)
      console.log('myFormValues',formValues)
    }else{
      console.log('selecteddata',this.data)
      const formValues = this.MyPayLoad()
      this.saveDataInState[this.data] = formValues
      console.log('hhhhh',this.data)
      console.log('Updated StateValues:', this.saveDataInState);
    }

  }

  close(){
    this.AngularMaterialCommunicationService.getMyStateData()
    this._dialogue.closeAll()
  }


}
