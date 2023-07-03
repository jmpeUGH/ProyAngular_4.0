
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface, UserResp } from '../models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class LoginService {

  token: string | null = sessionStorage.getItem('token-app');
  // constructor(private httpClient:HttpClient, private user:UserInterface) { }
  constructor(private httpClient:HttpClient) { }

  login(fakeObject:UserResp){
    return this.httpClient.post<UserResp>('https://dummyjson.com/auth/login', fakeObject)
    .pipe(
      map((response:UserResp)=>{
        console.log(response.token)
        this.token= response.token as string;
        // Guardo el token en SessionStorage
        sessionStorage.setItem('token-app', this.token);
        return response
      })
    )
  }


}
