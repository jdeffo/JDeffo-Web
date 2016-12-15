import { JDeffoWebPage } from './app.po';

describe('jdeffo-web App', function() {
  let page: JDeffoWebPage;

  beforeEach(() => {
    page = new JDeffoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
