import { ConvoyargePage } from './app.po';

describe('convoyarge App', function() {
  let page: ConvoyargePage;

  beforeEach(() => {
    page = new ConvoyargePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
