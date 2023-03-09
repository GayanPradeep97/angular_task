import { Component } from '@angular/core';
import { UserDataService} from './../../services/user-data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public datas: any

  constructor(private userData:UserDataService){
    this.userData.getUsers().subscribe((data) => {
      this.datas = data;
    })
  }

}
