import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini_moodle_angular';
  constructor(public router: Router ){

  }
}
