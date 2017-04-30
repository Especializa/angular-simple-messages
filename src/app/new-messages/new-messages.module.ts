import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessagesComponent } from './new-messages.component';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewMessagesComponent, MessageBoxComponent]
})
export class NewMessagesModule { }
