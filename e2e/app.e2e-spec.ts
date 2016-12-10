import { Taller01Page } from './app.po';

describe('taller01 App', function() {
  let page: Taller01Page;

  beforeEach(() => {
    page = new Taller01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
