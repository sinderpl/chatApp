import { ChatAppAngularPage } from './app.po';

describe('chat-app-angular App', function() {
  let page: ChatAppAngularPage;

  beforeEach(() => {
    page = new ChatAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
