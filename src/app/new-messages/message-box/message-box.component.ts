import { Component, Input, Output, EventEmitter,
         OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,
         OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  public text = '';
  @Output() onNewMessage = new EventEmitter<string>();

  constructor() { }

  buttonClicked() {
    this.onNewMessage.emit(this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('MessageBox - ngOnChanges');
    // console.log(changes);
  }
  ngOnInit() {
    // console.log('MessageBox - ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('MessageBox - ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('MessageBox - ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('MessageBox - ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('MessageBox - ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log('MessageBox - ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // console.log('MessageBox - ngOnDestroy');
  }
}
