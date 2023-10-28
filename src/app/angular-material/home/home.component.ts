import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSpinner: boolean = false;

  constructor(private spinner: NgxSpinnerService) {}

  onTabChange(event: any) {
    this.showSpinner = true; // Show the spinner when the tab changes
    // You can add your data loading logic here

    // Simulate an async operation (replace this with your actual logic)
    setTimeout(() => {
      this.showSpinner = false; // Hide the spinner when the operation is complete
    }, 2000); // Adjust the timeout duration as needed
  }

  
}
