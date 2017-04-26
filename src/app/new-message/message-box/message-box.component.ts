import { Component, OnInit, Input } from '@angular/core';
import { Message, ImageMessage, MessagesService } from '../../core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  public text: string;
  @Input() messages: Message[];

  constructor(private service: MessagesService) {
  }

  ngOnInit() {
  }
  addMessage() {
    this.service.messageFactory(this.text).then((m: Message) => {
      this.messages.push(m);
    });
  }
}
