import { AngularBootstrapCommunationService } from './../shared/angular-bootstrap-communation.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testing-com',
  templateUrl: './testing-com.component.html',
  styleUrls: ['./testing-com.component.css']
})
export class TestingComComponent {
  @Input() MyVariables:any = [] = []
  variables :any = [] = []
  constructor(private AngularBootstrapCommunationService:AngularBootstrapCommunationService) { }

  ngOnInit(): void {
    this.myvariablesfunction()
  }

  myvariablesfunction() {
    this.AngularBootstrapCommunationService.getvariables().subscribe(data => {
      this.variables = data;
      console.log('Myvar###', this.variables);
    });
  }
}
