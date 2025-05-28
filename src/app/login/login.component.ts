import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf,
    RouterLink,
    ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm=new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
    }

  myValidator(control: FormControl) {

  }

  onSubmit() {

  }
}
