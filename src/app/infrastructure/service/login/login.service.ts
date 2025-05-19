import { inject, Injectable } from '@angular/core';
import { LoginDTO } from '@infrastructure/models/dto/login-dto';

import { HttpClient } from '@angular/common/http';
import { Token } from '@infrastructure/models/request/token';
import { ResponseItem } from '@infrastructure/models/request/response-item';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

const api = environment.api

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http: HttpClient = inject(HttpClient);

  constructor() { 

  }

  login(form:LoginDTO): Observable<ResponseItem<Token>>{
    return this.http.post<ResponseItem<Token>>(
      `${api}/user/login`,
      form
    );
  }
}
