export const connectWalletDesktop = () => {
  cy.get('[data-cy="wallet"]').should('be.visible')
  cy.get('[data-cy="wallet"]').realHover()
  cy.get('[data-cy="wallet"] div button:nth-child(4)').click()
}

export const connectWalletMobile = () => {
  cy.get('[aria-label="menu"]').click()
  cy.get('#mobile [data-cy="wallet"]').should('be.visible')
  cy.get('#mobile [data-cy="wallet"]').realTouch()
  cy.get('#mobile [data-cy="wallet"] div button:nth-child(4)').click()
  cy.get('[aria-label="menu"]').click()
}
