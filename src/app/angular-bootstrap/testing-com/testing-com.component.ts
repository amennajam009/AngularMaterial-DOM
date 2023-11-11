import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularBootstrapCommunationService } from './../shared/angular-bootstrap-communation.service';
import { Component, Input } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';

@Component({
  selector: 'app-testing-com',
  templateUrl: './testing-com.component.html',
  styleUrls: ['./testing-com.component.css']
})
export class TestingComComponent {
  @Input() MyVariables:any = [] = []
  @Input() dataToSend: string | any
  testingCompForm : FormBuilder | any;
  variables :any = []
  constructor(private AngularBootstrapCommunationService:AngularBootstrapCommunationService,
              private FormBuilder:FormBuilder,
              private bootstrapService:BootstrapServiceService,) { 
               this.dropDownVariableModal()
              }

  ngOnInit(): void {
    this.myvariablesfunction()
    console.log(this.dataToSend)
  }



  dropDownVariableModal(){
    this.testingCompForm = this.FormBuilder.group({
      variable1: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable2: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable3: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable4: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable5: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable6: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable7: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable8: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      variable9: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }

  SubmitOrder(){
    const payLoad = this.testingCompForm.value;
    this.bootstrapService.saveTestingVariable(payLoad).subscribe((res:any)=>{
      res;
    })
  }

  myvariablesfunction() {
   this.variables =  this.AngularBootstrapCommunationService.getvariables()
      console.log('Myvar###', this.variables);
    ;
  }
}
