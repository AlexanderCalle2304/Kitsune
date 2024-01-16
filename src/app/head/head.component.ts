import { Component } from '@angular/core';
import { HeadINComponent } from '../head-in/head-in.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [HeadINComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
