import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  constructor(private formbuilder:FormBuilder){
    this.form = this.formbuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z].{0,}')]]
    })
  }

  ngOnInit(): void {
    
  }

  get Mail(){
    return this.form.get("email");
  }

  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get Password(){
    return this.form.get("password");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get ButtonDisabled(){
    return !this.Password?.valid || !this.Mail?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){
      alert("all okay");
    }else{
      this.form.markAllAsTouched();
    }
  }
}
