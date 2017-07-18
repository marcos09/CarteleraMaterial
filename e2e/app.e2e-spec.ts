import { PruebaCarteleraPage } from './app.po';

describe('prueba-cartelera App', () => {
  let page: PruebaCarteleraPage;

  beforeEach(() => {
    page = new PruebaCarteleraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
