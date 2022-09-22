import { TEST_ADDRESS_NEVER_USE_SHORTENED } from '../support/ethereum'
import { providers } from '../utils/providers'

describe('Connect Wallet Button', () => {
  context('Desktop', () => {
    before(() => {
      cy.visit('/')
    })

    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Check Wallet Providers', () => {
      cy.get('.group').realHover()
      cy.get('.group > div > button').its('length').should('eq', 4)
      cy.get('.group > div > button').each((el, index) => {
        cy.wrap(el)
          .should(providers[index].visible)
          .contains(providers[index].contains)
          .should(providers[index].attribute)
      })
    })

    it('Connect Wallet', () => {
      cy.get('.group').realHover()
      cy.get('.group > div > button').each((el, index) => {
        if (index === 3) {
          cy.wrap(el).click()
        }
      })
    })

    it('Displays Wallet Address', () => {
      cy.get('#connect').contains(TEST_ADDRESS_NEVER_USE_SHORTENED)
    })

    it('Disconnect Wallet', () => {
      cy.get('#connect').click()
      cy.get('#connect').contains('connect wallet')
    })

    it('Disabled Buttons While Connecting Wallet', () => {
      cy.get('.group').realHover()
      cy.get('.group > div > button').each((el, index) => {
        if (index === 2) {
          cy.wrap(el).click()
        }
      })
      cy.get('.group > div > button').each((el, index) => {
        cy.wrap(el).contains(providers[index].contains).should('be.disabled')
      })
      cy.get('.walletconnect-modal__close__wrapper').click()
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.visit('/')
    })

    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('Expand & Close Menu', () => {
      cy.get('[aria-label="menu"]').click()
      cy.get('#mobile').should('exist').and('be.visible')
      cy.get('[aria-label="menu"]').click()
      cy.get('#mobile').should('not.exist')
    })

    it('Close Menu On Route Change', () => {
      cy.get('[aria-label="menu"]').click()
      cy.get('#mobile > [href="/create"]').click()
      cy.get('#mobile').should('not.exist')
    })

    it('Check Wallet Providers', () => {
      cy.get('[aria-label="menu"]').click()
      cy.get('#mobile > .group').realTouch()
      cy.get('#mobile > .group > div > button').its('length').should('eq', 4)
      cy.get('#mobile > .group > div > button').each((el, index) => {
        cy.wrap(el)
          .should(providers[index].visible)
          .contains(providers[index].contains)
          .should(providers[index].attribute)
      })
    })

    it('Connect Wallet', () => {
      cy.get('#mobile > .group').realTouch()
      cy.get('#mobile > .group > div > button').each((el, index) => {
        if (index === 3) {
          cy.wrap(el).click()
        }
      })
    })

    it('Displays Wallet Address', () => {
      cy.get('#mobile > .group > #connect').contains(TEST_ADDRESS_NEVER_USE_SHORTENED)
    })

    it('Disconnect Wallet', () => {
      cy.get('#mobile > .group').realTouch()
      cy.get('#mobile > .group > #connect').contains('connect wallet')
    })

    it('Disabled Buttons While Connecting Wallet', () => {
      cy.get('#mobile > .group').realTouch()
      cy.get('#mobile > .group > div > button').each((el, index) => {
        if (index === 2) {
          cy.wrap(el).click()
        }
      })
      cy.get('#mobile > .group > div > button').each((el, index) => {
        cy.wrap(el).contains(providers[index].contains).should('be.disabled')
      })
      cy.get('.walletconnect-modal__close__wrapper').click()
    })
  })
})
