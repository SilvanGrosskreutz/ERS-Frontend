import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReimbursementMenuComponent } from './components/reimbursement-menu/reimbursement-menu.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
}, {
  path: "login",
  component: LoginComponent
}, {
  path: "userInfo",
  component: UserInfoComponent
}, {
  path: "reimMenu",
  component: ReimbursementMenuComponent
}, {
  path: "register",
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
