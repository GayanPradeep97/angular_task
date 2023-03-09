import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public jsonGetValue:any;
  public jsonPostValue:any;
  public jsonDeleteValue:any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.getMethod();
    this.postMethod();
    this.deleteMethod();
  }

  public getMethod(){
    this.http.get("http://localhost:3000/users").subscribe((data) => {
      console.log(data);
       this.jsonGetValue = data;
    })
  }

  public postMethod(){
    let body = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      }
      this.http.post("http://localhost:3000/users",body).subscribe((data) => {
        this.jsonPostValue = data;
      })
    }

    public deleteMethod(){
      this.http.delete("http://localhost:3000/users/1").subscribe((data) => {
        this.jsonDeleteValue = data;
    })
    }
}


  

  


