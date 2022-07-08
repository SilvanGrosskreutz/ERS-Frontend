import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/models/reimbursement';
import { User } from 'src/app/models/user';
import { ReimService } from 'src/app/services/reim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reimbursement-menu',
  templateUrl: './reimbursement-menu.component.html',
  styleUrls: ['./reimbursement-menu.component.css']
})
export class ReimbursementMenuComponent implements OnInit {

  activeUser:User|null = this.userService.activeUser;

  isManager:boolean = this.activeUser?.role == "MANAGER" ? true : false;

  amount:number = 0;
  errorMsg:boolean = false;
  successMsg:boolean = false;
  nonZeroMsg:boolean = false;


  constructor(private userService:UserService, private reimService:ReimService) { }

  ngOnInit(): void {
  }

  createReim(){
    this.successMsg = false;
    this.errorMsg = false;
    this.nonZeroMsg = false;
    if(this.activeUser && this.amount > 0){
      let reim:Reimbursement = new Reimbursement(0, "PENDING", this.activeUser, this.amount);
      this.reimService.createReim(reim).subscribe({
        next:()=>{
          this.successMsg = true;
        },
        error:()=>{
          this.errorMsg = true;
        }
      });
    } else{
      this.nonZeroMsg = true;
    }
    
  }

}
