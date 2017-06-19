import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OldMessagesComponent } from './old-messages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [OldMessagesComponent],
  exports: [OldMessagesComponent],
})
export class OldMessagesModule { }
