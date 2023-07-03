import { Component } from '@angular/core';
import { UserResp, UserInterface } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public name: string = '';
  public pasguord: string ='';
  public email: string = '';
  public isLogged = false;


  constructor(public loginService:LoginService){}

  onSubmit(){
    const fakeObject={
      username: 'kminchelle',
      password: '0lelplR'
    };
    this.login(fakeObject);
    }



  private login(fakeObject:any){
      this.loginService.login(fakeObject).subscribe(data=>{
        //console.log(data);
        //console.log(this.loginService.token);
        this.isLogged=true;
      });
  }
}
