import { inject, Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoginDTO } from "@infrastructure/models/dto/login-dto";
import { AuthService } from "@infrastructure/service/auth/auth.service";
import { LoginService } from "@infrastructure/service/login/login.service";

@Injectable({
  providedIn: 'root'
})

export class LoginVM{
  loginService: LoginService = inject(LoginService)
  authService: AuthService = inject(AuthService)
  router: Router = inject(Router)
  loginDto!: LoginDTO

  @Input()isLoading: boolean = false  

  constructor(){

  }

  login(OnSuccess: () => void){
    this.loginService.login(this.loginDto).subscribe({
        next:(response) => {
          if(response.status){
            this.authService.setToken(response.item.token)
            this.isLoading = false
          }
        },
        error:(e) => {
          this.isLoading = false
        },
        complete:() => {
          this.isLoading = false
          if(this.authService.getToken() != null){
            OnSuccess()
          }
        }
    })
  }
}