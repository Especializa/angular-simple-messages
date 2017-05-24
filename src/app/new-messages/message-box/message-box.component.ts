import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  public text = '';
  @Output() onNewMessage = new EventEmitter<string>();

  constructor() { }

  buttonClicked() {
    this.onNewMessage.emit(this.text);
  }

  ngOnInit() {
  }

}
