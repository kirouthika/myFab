import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-measurements',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectModule
  ],
  templateUrl: './measurements.component.html',
  styleUrl: './measurements.component.css'
})
export class MeasurementsComponent {
  // @ts-ignore
  measurementForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.measurementForm = this.fb.group({
      weight: [''],
    });
  }

  getmeasurements(measures: any) {
    
  }
}
