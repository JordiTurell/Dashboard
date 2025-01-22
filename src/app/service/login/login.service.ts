import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../models/token';
import { ResponseItem } from '../../models/response-item';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

const api = environment.api

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private headers:HeadersService, private http: HttpClient) { 

  }

  login(form:Login): Observable<ResponseItem<Token>>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.post<ResponseItem<Token>>(
      `${api}/login`,
      form,
      { headers: header }
    );
  }
}
