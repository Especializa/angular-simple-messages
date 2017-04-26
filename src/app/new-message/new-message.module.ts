import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NewMessageComponent } from './new-message.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [MessageBoxComponent, NewMessageComponent]
})
export class NewMessageModule { }
