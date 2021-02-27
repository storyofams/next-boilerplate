beforeEach(() => {
  cy.visit('/');
});

describe('Home page general', () => {
  it('should have valid seo tags', () => {
    cy.title().should('contain', 'Home -');
  });
});

describe('Home page mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-5');
  });

  it('should render the page', () => {});
});

describe('Home page desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
  });

  it('should render the page', () => {});
});
