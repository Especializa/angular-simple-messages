import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public text = '';

  constructor() { }

  buttonClicked() {
    console.log('The button has been clicked');
    console.log(`this.text is currently ${this.text}`);
  }

  ngOnInit() {
  }

}
