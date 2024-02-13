import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MeasurementsComponent } from './measurements/measurements.component';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MeasurementsComponent
  ],
  providers: [ HttpClientModule ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  // @ts-ignore
  customerForm: FormGroup;
  customerData: any = {};
  userAdded = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern]],
    });
  }

  getCustomerData(customerData:any) {
    console.log("dsjkfhjl: ", customerData.value);
    this.customerData = customerData.value;
    this.http.post('http://localhost:3000/user', this.customerData).subscribe((data) => {
      console.log(data);
      this.customerForm.reset();
      this.userAdded = true;
    },
      error => {
        console.log('Error', error);
      });
    // this.apiService.addUser(this.customerData).subscribe((data) => {
    //   // if (data['status'] === "success"){
    //     alert('Successfully added new user'); 
    //     // } else {
    //     //   alert(`Error adding new user: ${data['message']}`);
    //     // }
    // }, (err) => {
    //   console.error('Error in adding user');
    // });
  }
}
