import { Component } from '@angular/core';
import { LegsInComponent } from '../legs-in/legs-in.component';

@Component({
  selector: 'app-legs',
  standalone: true,
  imports: [LegsInComponent],
  templateUrl: './legs.component.html',
  styleUrl: './legs.component.css'
})
export class LegsComponent {

}
