import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { ImageMessage } from './image-message.model';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];

  constructor() { }

  private messageFactory(text: string): Promise<Message> {
    const giphy: RegExp = /\/giphy ('.*'|\w+)/;
    if (giphy.test(text)) {
      const match: string = (text.match(giphy) as string[])[1];
      return fetch('http://api.giphy.com/v1/gifs/search?' +
            `q=${match}&api_key=dc6zaTOxFJmzC`, {
        method: 'GET',
        mode: 'cors',
      })
      .then((response: Response) => response.json())
      .then((result: any) => {
        return new ImageMessage(text, undefined,
          result.data[0].images.fixed_height_small.url);
      })
      .catch(() => new Message(text)) as Promise<Message>;
    }
    return Promise.resolve(new Message(text));
  }

  public addMessage(text: string): Promise<Message[]> {
    return this.messageFactory(text).then((m: Message) => {
      this.messages = [
        ...this.messages,
        m,
      ];
      localStorage.setItem('messages', JSON.stringify(this.messages));
      return this.messages;
    });
  }

  public loadMessages(): Message[] {
    const item = localStorage.getItem('messages');
    if (item) {
      this.messages = JSON.parse(item);
    }
    return this.messages;
  }

  public listMessages(): Message[] {
    return this.messages;
  }

  public editMessage(index: number, message: Message) {
    this.messages = [
      ...this.messages.slice(0, index),
      message,
      ...this.messages.slice(index + 1),
    ];
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }
}
