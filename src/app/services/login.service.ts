import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string | null = sessionStorage.getItem('token-app');
  // constructor(private httpClient:HttpClient, private user:UserInterface) { }
  constructor(private httpClient:HttpClient) { }

  login(object:UserInterface){
    return this.httpClient.post('https://dummyjson.com/auth/login', object)
    .pipe(
      map((response: any)=>{
        this.token= response.token;
        //Guardo el token en SessionStorage
        sessionStorage.setItem('token-app', response.token)
        return response
      })
    )
  }
}
