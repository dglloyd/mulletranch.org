describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the name', () => {
    cy.get('h1')
    .contains('Mullét Ranch');
  })
  // it('renders the image', () => {
  //   cy.get('img')
  //   .should('be.visible')
  //   .and(($img) => {
  //     expect($img[0].naturalWidth).to.be.greaterThan(0);
  //   })
  // })
})