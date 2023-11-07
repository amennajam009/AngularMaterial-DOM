import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-main',
  templateUrl: './crud-main.component.html',
  styleUrls: ['./crud-main.component.css']
})
export class CRUDMainComponent {

  UserFrom: FormBuilder | any


constructor(private FormBuilder:FormBuilder) { }

ngOnInit(): void {

}

userFromModel(){
  this.UserFrom = this.FormBuilder.group({
    variable1: new FormControl ('',[Validators.required]),
    variable2: new FormControl ('',[Validators.required]),
    variable3: new FormControl ('',[Validators.required,]),
    variable4: new FormControl ('',[Validators.required,]),
    variable5: new FormControl ('',[Validators.required,]),
    variable6: new FormControl ('',[Validators.required,]),
    variable7: new FormControl ('',[Validators.required,]),
    variable8: new FormControl ('',[Validators.required,]),
    variable9: new FormControl ('',[Validators.required,]),
  })
}

}
