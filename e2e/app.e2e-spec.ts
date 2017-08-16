import { Practice1Page } from './app.po';

describe('practice1 App', () => {
  let page: Practice1Page;

  beforeEach(() => {
    page = new Practice1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
