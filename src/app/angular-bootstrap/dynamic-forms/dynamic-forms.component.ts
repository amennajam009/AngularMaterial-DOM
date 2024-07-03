import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent {
user_Info: FormGroup | any;

constructor(private readonly fb:FormBuilder){
}

ngOnInit(){
  this.userInfoModal()
}

  userInfoModal(){
    this.user_Info = this.fb.group({
      name:[''],
      email:[''],
      first_name:[''],
      last_name:[''],
      contact_Info: this.fb.array([this.createContactInfo()]),
    })
  }

  get contactInfoControl(){
    return this.user_Info.get('contact_Info') as FormArray
  }

  createContactInfo(){
   return this.fb.group({
      address:[''],
      city:[''],
      country:[''],
      pin_code:[''],
      last_name:['']
    })
  }

  addFields(){
    this.contactInfoControl.push(this.createContactInfo())
  }
  submit(){
    const formValue = this.user_Info.value;
    console.log(formValue)
  }
}
