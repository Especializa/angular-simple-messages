import { Component, OnInit, Input } from '@angular/core';
import { Message, ImageMessage } from 'app/core';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss']
})
export class MessagesAreaComponent implements OnInit {
  @Input() messages: Message[] = [];

  ngOnInit() {
  }

  isImageMessage(m: Message) {
    return m instanceof ImageMessage;
  }
}
