import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessagesComponent } from './new-messages.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [NewMessagesComponent, MessageBoxComponent]
})
export class NewMessagesModule { }
