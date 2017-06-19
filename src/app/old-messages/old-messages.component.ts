import { Component, OnInit } from '@angular/core';
import { MessagesService, Message } from 'app/core';

@Component({
  selector: 'app-old-messages',
  templateUrl: './old-messages.component.html',
  styleUrls: ['./old-messages.component.scss']
})
export class OldMessagesComponent implements OnInit {
  public messages: Message[];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.loadMessages();
  }

  ngOnInit() {
  }

}
