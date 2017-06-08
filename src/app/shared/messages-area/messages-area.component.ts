import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Message, ImageMessage } from 'app/core';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss']
})
export class MessagesAreaComponent implements OnInit, OnChanges {
  @Output() messagesChange = new EventEmitter<Message[]>();
  private _messages: Message[] = [];

  @Input() set messages(messages: Message[]) {
    if (Array.isArray(messages)) {
      this._messages = messages;
    }
    this.messagesChange.emit(this._messages);
  }

  get messages() {
    return this._messages;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  isImageMessage(m: Message) {
    return m instanceof ImageMessage;
  }

  trackBy(index: number, m: Message) {
    return m.created;
  }
}
