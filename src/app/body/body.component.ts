import { Component } from '@angular/core';
import { BodyINComponent } from '../body-in/body-in.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BodyINComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
