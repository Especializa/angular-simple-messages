import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldMessagesComponent } from './old-messages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [OldMessagesComponent]
})
export class OldMessagesModule { }
