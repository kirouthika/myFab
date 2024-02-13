import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public title = 'Angular2 Webpack Starter';

  constructor() { }
  
}
