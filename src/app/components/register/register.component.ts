import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string = "";
  password:string = "";

  role:string = "";

  errorMsg:boolean = false;
  notAllFieldFilled:boolean = false;
  successMsg:boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.notAllFieldFilled = false;
    this.successMsg = false;
    let user:User = new User(0, this.username, this.password, this.role);
    if(this.username && this.password && this.role){
      this.userService.register(user).subscribe({
        next:()=>{
          this.successMsg = true;
        }, error:()=>{
          this.errorMsg = true;
        }
      });
    } else{
      this.notAllFieldFilled = true;
    }
  }
}
