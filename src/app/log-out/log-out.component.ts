import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.closePopup();
  }

  leave(){
    this.closePopup();
  }  

  closePopup(){
    //do some stuff to close popup!
  }

}
