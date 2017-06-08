import { Input, Output, EventEmitter,
         Component, OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,
         OnDestroy, SimpleChanges } from '@angular/core';
import { Message, ImageMessage } from 'app/core';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss']
})
export class MessagesAreaComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
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

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('MessagesArea - ngOnChanges');
    // console.log(changes);
  }
  ngOnInit() {
    // console.log('MessagesArea - ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('MessagesArea - ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('MessagesArea - ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('MessagesArea - ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('MessagesArea - ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log('MessagesArea - ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // console.log('MessagesArea - ngOnDestroy');
  }

  isImageMessage(m: Message) {
    return m instanceof ImageMessage;
  }

  trackBy(index: number, m: Message) {
    return m.created;
  }
}
