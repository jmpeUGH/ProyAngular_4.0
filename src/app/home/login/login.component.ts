import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = 'kminchelle';
  public password: string ='0lelplR';
  public email: string = '';
  public isLogged = false;


  constructor(public loginService:LoginService,){}

  onSubmit(){
    const object={
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.login(object);
  }
  private login(object:any){
      this.loginService.login(object).subscribe(data=>{
        console.log(data);
        console.log(this.loginService.token);
        this.isLogged=true;
      });
  }
}
