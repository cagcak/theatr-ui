import { getGreeting } from '../support/app.po';

describe('casting', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to casting!');
  });
});
