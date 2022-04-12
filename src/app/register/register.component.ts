import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationValues = [
    {
      label: 'Country',
      value: ''
    },
    {
      label: 'Province',
      value: ''
    },
    {
      label: 'Address',
      value: ''
    },
    {
      label: 'Postal Code',
      value: ''
    },
    {
      label: 'Phone Number',
      value: ''
    },
    {
      label: 'First Name',
      value: ''
    },
    {
      label: 'Last Name',
      value: ''
    },
    {
      label: 'Email',
      value: ''
    },
    {
      label: 'Username',
      value: ''
    },
    {
      label: 'Password',
      value: ''
    },
    {
      label: 'Confirm Password',
      value: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
