import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { LoginRoutingModule } from './login.routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule, 
    LoginRoutingModule
  ],
  exports:[LoginComponent, LoginRoutingModule]

})
export class LoginModule { }
