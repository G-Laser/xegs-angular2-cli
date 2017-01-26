import { XEGSAngularCliPage } from './app.po';

describe('xegs-angular-cli App', function() {
  let page: XEGSAngularCliPage;

  beforeEach(() => {
    page = new XEGSAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
