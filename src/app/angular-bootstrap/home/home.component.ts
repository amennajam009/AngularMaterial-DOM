
import { Component, EventEmitter, Output } from '@angular/core';
import { BootstrapServiceService } from '../shared/bootstrap-service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularBootstrapComponent } from '../angular-bootstrap.component';
import { AngularBootstrapCommunationService } from '../shared/angular-bootstrap-communation.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataToSend: string = ""
  variabledata:any = [] = [];
  dropDownVariables : FormBuilder | any;
  imageTesting : FormBuilder | any;
  @Output() sendObjectToTestingComp = new EventEmitter<any>();
  dataToGet: any;
  arrayForTesting:any = ['one','two','three']
  unsubscribeInterval!:Subscription; 
  newVar: any
  constructor(private bootstrapService:BootstrapServiceService,
              private FormBuilder:FormBuilder,
              private bootStrapService:BootstrapServiceService,
              private AngularBootstrapCommunationService:AngularBootstrapCommunationService) { 
                this.dropDownVariableModal()
              }

  ngOnInit(): void {
  //  this.unsubscribeInterval = interval(1000).subscribe((count) => {
  //     console.log(count); 
  //   });
    this.GetDropdownVariables();
    this.getDataForTest()
    this.mymethod()
  }


  dropDownVariableModal(){
    this.dropDownVariables = this.FormBuilder.group({
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

  imageTestingForm(){
  this.imageTesting = this.FormBuilder.group({
    name:new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
  }
 
  getDataForTest(){
    this.dataToGet = this.AngularBootstrapCommunationService.dataToSend(this.arrayForTesting).subscribe(
      (res:any)=>{
      console.log(res)
      },
      (error:any)=>{
       console.log(error)
      }
    )
  }
  
SubmitOrder(){
  const payLoad = this.dropDownVariables.value;
  this.bootStrapService.saveVariables(payLoad).subscribe((res:any)=>{
    res
  })
}

mymethod(){
 const myobject = {
     name: 'amen',
     age: 21,
     education: 'matric'
  }
  const {name,age} = myobject
  this.newVar = {name,age}
  console.log(this.newVar)
}

  GetDropdownVariables(){
    this.bootstrapService.GetDropDownVariables().subscribe((res:any)=>{
      this.variabledata  = res?.data.data;
      this.AngularBootstrapCommunationService.setvariables(
        this.variabledata
      );
    })
  }
  sendHelloWorldToOtherComponent(){
    this.dataToSend = "Hello World"
  }

  ngOnDestroy(){
   this.unsubscribeInterval.unsubscribe();
  }
}
