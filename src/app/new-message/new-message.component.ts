import { Component, OnInit } from '@angular/core';
import { Message } from '../core';
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  public messages: Message[];
  constructor() {
    this.messages = [];
  }

  ngOnInit() {
  }
}
