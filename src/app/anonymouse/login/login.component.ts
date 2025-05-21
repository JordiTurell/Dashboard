import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@core/shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginVM } from '@infrastructure/vm/login-vm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup
  public loginvm:LoginVM = inject(LoginVM)
  router = inject(Router)
  
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.loginvm.loginDto = this.loginForm.value
      this.loginvm.login(() => {
        this.router.navigate(['/dashboard/home'])
      })
    }
  }
}
