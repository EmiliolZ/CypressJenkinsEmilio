describe('Test de pruebas para Jenkis', () => {
  it('Test que pasa', () => {
    cy.visit('https://example.cypress.io')
  })
  it('Test que falla', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').shoul("have.text", "Hola hola");
  })
  it('Test que no se ejecuta', () => {
    cy.visit('https://example.cypress.io')
  })
})