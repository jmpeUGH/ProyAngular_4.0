import { Component } from '@angular/core';
import { UserResp, UserInterface, UserLogin, UserLoginResp } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = '';
  public password: string ='';
  public email: string = '';
  public isLogged = false;
  userLogged:any|null=null;
  public userError!:boolean;


  constructor(public loginService:LoginService){}

  onSubmit(){
    //this.userError=false;

    // this.findUser(this.email);

    // if(this.userLogged.email==null){
    //   this.userError=true;
    // }else if(this.userLogged.email!=this.email || this.userLogged.password!=this.password){
    //   this.userError=true
    // }else {
      const fakeObject={
            username: 'kminchelle',
            password: '0lelplR'
          };
        this.login(fakeObject);
     }
    // }

  private login(fakeObject:any){
      this.loginService.login(fakeObject).subscribe(data=>{
        //console.log(data);
        //console.log(this.loginService.token);
        this.isLogged=true;
      });
  }
  findUser(email:string){
    this.loginService.findUser(this.email).subscribe((userEncontrado:UserLoginResp)=>{

      this.userLogged=userEncontrado;
      //console.log(this.userLogged.email)
      this.userError=false;
    })
  }
}
