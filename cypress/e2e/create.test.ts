import { ERC721Inputs, ERC1155Inputs } from '../utils/inputs'
import {
  connectWalletDesktop,
  connectWalletMobile,
} from '../utils/connectWallet'

const wait = 6000 // hardhat mining interval is set to 5 sec

describe('Create Contract', () => {
  context('Desktop ERC721', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Fetching Cost Failed', () => {
      cy.get('#erc721 > p').contains('deployment cost: fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc721 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc721 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('#erc721 > p').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC721Inputs[index])
      })
    })

    it('Deploy Contract', () => {
      cy.get('#erc721 > button').click()
      cy.get('.space-y-4 > .capitalize').should('exist')
      cy.get('.space-y-4 > .capitalize').contains('transaction submitted')
      cy.get('.space-y-4 > button').click()
      cy.get('.space-y-4 > .capitalize').should('not.exist')
      cy.get('#erc721 > button').contains('deploying...')
      cy.wait(wait)
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('tbody > :last-child').should('exist')
      cy.get('tbody > :last-child > td:first-child').contains('erc721')
    })
  })

  context('Desktop ERC1155', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Select Contrat Type', () => {
      cy.get('.space-x-4 > .bg-black').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('#erc1155 > p').contains('deployment cost: fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc1155 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc1155 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('#erc1155 > p').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC1155Inputs[index])
      })
    })

    it('Deploy Contract', () => {
      cy.get('#erc1155 > button').click()
      cy.get('.space-y-4 > .capitalize').should('exist')
      cy.get('.space-y-4 > .capitalize').contains('transaction submitted')
      cy.get('.space-y-4 > button').click()
      cy.get('.space-y-4 > .capitalize').should('not.exist')
      cy.get('#erc1155 > button').contains('deploying...')
      cy.wait(wait)
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('tbody > :last-child').should('exist')
      cy.get('tbody > :last-child > td:first-child').contains('erc1155')
    })
  })

  context('Mobile ERC721', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('Fetching Cost Failed', () => {
      cy.get('#erc721 > p').contains('deployment cost: fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc721 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc721 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('#erc721 > p').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC721Inputs[index])
      })
    })

    it('Deploy Contract', () => {
      cy.get('#erc721 > button').click()
      cy.get('.space-y-4 > .capitalize').should('exist')
      cy.get('.space-y-4 > .capitalize').contains('transaction submitted')
      cy.get('.space-y-4 > button').click()
      cy.get('.space-y-4 > .capitalize').should('not.exist')
      cy.get('#erc721 > button').contains('deploying...')
      cy.wait(wait)
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('tbody > :last-child').should('exist')
      cy.get('tbody > :last-child > td:first-child').contains('erc721')
    })
  })

  context('Mobile ERC1155', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('Select Contrat Type', () => {
      cy.get('.space-x-4 > .bg-black').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('#erc1155 > p').contains('deployment cost: fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc1155 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc1155 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('#erc1155 > p').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC1155Inputs[index])
      })
    })

    it('Deploy Contract', () => {
      cy.get('#erc1155 > button').click()
      cy.get('.space-y-4 > .capitalize').should('exist')
      cy.get('.space-y-4 > .capitalize').contains('transaction submitted')
      cy.get('.space-y-4 > button').click()
      cy.get('.space-y-4 > .capitalize').should('not.exist')
      cy.get('#erc1155 > button').contains('deploying...')
      cy.wait(wait)
      cy.location('pathname').should('eq', '/dashboard')
      cy.get('tbody > :last-child').should('exist')
      cy.get('tbody > :last-child > td:first-child').contains('erc1155')
    })
  })
})
