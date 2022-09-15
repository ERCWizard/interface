import { TEST_ADDRESS_NEVER_USE_SHORTENED } from '../support/ethereum'
import { providers } from '../utils/providers'

describe('Connect Wallet Button', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    // Desktop res
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
    cy.get('#connect').should('be.enabled')
    cy.get('#connect').click()
    cy.get('#connect').contains('connect wallet')
    cy.get('#connect').should('be.enabled')
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
