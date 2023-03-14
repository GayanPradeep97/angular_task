import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent {

  @Input() array = [''];
  @Output() addNewItemEvent = new EventEmitter<string>();

  //input values
  public serchvalue :string = 'iphone';
  
  hiddenDisplay : boolean = false;
  

  addNewItem(value:string, inputField: HTMLInputElement){
    this.addNewItemEvent.emit(value);
    inputField.value='';

  }
 
  //delete input items
  deleteItem(index:number){
    this.array.splice(index,1)
  }

  // clearInput(inputField: HTMLInputElement){
  //   inputField.value='';
  // }

  //input field value
  changeValue(eventData :Event){
    this.serchvalue = (<HTMLInputElement>eventData.target).value;
    
  }

  //hide input field
  hideInputFild(){
    this.hiddenDisplay = true;
  }
 
}
