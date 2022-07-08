import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  activeUser:User|null = this.userService.activeUser;

  password1:string = "";
  password2:string = "";
  oldPassword:string = "";

  isEqualToOldPw:boolean = false;
  isMisstypedConfirmation:boolean = false;
  isSuccessful:boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  update(){
    if(this.activeUser){
      this.isEqualToOldPw = false;
      this.isMisstypedConfirmation = false;
      this.isSuccessful = false;
      if(this.oldPassword == this.password1){
        this.isEqualToOldPw = true;
      } else{
        if(this.password1 == this.password2 && this.compareHash(this.oldPassword, this.activeUser?.password)){
          let updatedUser:User|null = this.activeUser;
          if(updatedUser){
            updatedUser.password = this.password1;
            this.userService.update(updatedUser).subscribe({
              next:()=>{
                this.isSuccessful = true;
              }
            }); 
          } 
        } else{
          this.isMisstypedConfirmation = true;
        }
      }
    }

  }

  compareHash(password:string, hashed:string){
    return bcrypt.compareSync(password, hashed);
  }

}
