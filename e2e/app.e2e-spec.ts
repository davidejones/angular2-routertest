import { RoutetestPage } from './app.po';

describe('routetest App', function() {
  let page: RoutetestPage;

  beforeEach(() => {
    page = new RoutetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
