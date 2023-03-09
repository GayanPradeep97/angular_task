import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { UserDataService} from './../services/user-data.service'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
