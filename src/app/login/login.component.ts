import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itraceForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl()
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.itraceForm.value);
    alert("User Email: " + this.itraceForm.value.email);
    
    //Observables for web-services

    this.router.navigate(['/welcome']);
  }

  get email() {
    return this.itraceForm.get('email');
  } 
 
  // get password() {
  //   return this.itraceForm.get('password');
  // } 

  
}

