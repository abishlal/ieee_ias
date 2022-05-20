import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:any;
  message : string ="";
  auth:any = getAuth();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass:  new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  onsubmit(){

    let email = this.login.value.email;
    let password = this.login.value.pass
    signInWithEmailAndPassword(this.auth, email, password).then((data)=>{
      this.message = "sucessfull",
      this.route.navigate(['/eventForm'])
    }).catch((error)=>{
      this.message = "";
      this.error =(error);
    })

  }

}
