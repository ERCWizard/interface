export const connectWalletDesktop = () => {
  cy.get('.group').realHover()
  cy.get('.group > div > button').each((el, index) => {
    if (index === 3) {
      cy.wrap(el).click()
    }
  })
}

export const connectWalletMobile = () => {
  cy.get('[aria-label="menu"]').click()
  cy.get('#mobile > .group').realTouch()
  cy.get('#mobile > .group > div > button').each((el, index) => {
    if (index === 3) {
      cy.wrap(el).click()
    }
  })
  cy.get('[aria-label="menu"]').click()
}
