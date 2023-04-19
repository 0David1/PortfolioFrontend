import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup

  constructor(private FormBuilder: FormBuilder){
    this.form = this.FormBuilder.group({
      email:['', [Validators.required,Validators.email]]/*,
      password:['',[-Validators.required,Validators.minLength(8),Validators.maxLength(16),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z].{0,}')]]*/
    })
  }

  ngOnInit(): void {
    
  }

  get Mail(){
    return this.form.get("email");
  }

  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid && this.Mail?.pristine;
  }

  get Password(){
    return this.form.get("password");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid && this.Password?.pristine;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){
      alert("all okay");
    }else{
      this.form.markAllAsTouched();
      this.form.markAsPristine();
    }
  }


}
