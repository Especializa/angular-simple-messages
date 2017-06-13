import { Component, OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,
         OnDestroy, SimpleChanges } from '@angular/core';
import { Message, MessagesService } from 'app/core';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.scss'],
})
export class NewMessagesComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  public messages: Message[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NewMessages - ngOnChanges');
  }
  ngOnInit() {
    console.log('NewMessages - ngOnInit');
  }
  ngDoCheck(): void {
    console.log('NewMessages - ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('NewMessages - ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('NewMessages - ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('NewMessages - ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('NewMessages - ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('NewMessages - ngOnDestroy');
  }

  onNewMessage(text: string) {
    this.messagesService.addMessage(text).then((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
