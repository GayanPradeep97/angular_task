import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent {

  @Input() array = [''];
  @Output() addNewItemEvent = new EventEmitter<string>();
  
  

  addNewItem(value:string, inputField: HTMLInputElement){
    this.addNewItemEvent.emit(value);
    inputField.value='';

  }
 
  deleteItem(index:number){
    this.array.splice(index,1)
  }

  // clearInput(inputField: HTMLInputElement){
  //   inputField.value='';
  // }
 
}
