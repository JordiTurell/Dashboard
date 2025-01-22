import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ModalErrorComponent } from "../../modals/modal-error/modal-error.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, ReactiveFormsModule, ModalErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() isLoading:boolean = false
  loginForm!:FormGroup
  @Input() errorMessage:string = ''
  @Input() isModalOpen : boolean = false

  constructor(private fb: FormBuilder, private loginservice:LoginService, private authservice:AuthService, private router:Router){
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  login(){
    this.isLoading = true
    if(this.loginForm.valid){
      this.loginservice.login(this.loginForm.value).subscribe({
        next:(response) => {
          if(response.status){
            this.authservice.setToken(response.item.token)
            this.isLoading = false
          }
        },
        error:(e) => {
          this.isLoading = false
        },
        complete:() => {
          this.isLoading = false
          if(this.authservice.getToken() != null){
            this.router.navigate(['/dashboard/home'])
          }else{
            this.errorMessage = 'Acceso incorrecto'
            this.isModalOpen = true
          }
         }
      })
    }else{
      this.errorMessage = 'Acceso incorrecto'
      this.isModalOpen = true
    }
  }
}
