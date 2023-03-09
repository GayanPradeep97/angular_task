import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  items =['item1','item2'];

  addItems(newItems:string){
    this.items.push(newItems)
  }
  

  
}
