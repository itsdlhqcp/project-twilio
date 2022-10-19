import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //temporary variable implimentation
  first_name: string = "";
  last_name: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  

}
