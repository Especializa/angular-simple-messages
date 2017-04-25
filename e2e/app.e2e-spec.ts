import { NgSimpleMessagesPage } from './app.po';

describe('ng-simple-messages App', () => {
  let page: NgSimpleMessagesPage;

  beforeEach(() => {
    page = new NgSimpleMessagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
