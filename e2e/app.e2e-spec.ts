import { AchtromatistPage } from './app.po';

describe('achtromatist App', () => {
  let page: AchtromatistPage;

  beforeEach(() => {
    page = new AchtromatistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
