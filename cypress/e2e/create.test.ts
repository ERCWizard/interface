import { ERC721Inputs, ERC1155Inputs } from '../utils/inputs'
import { connectWalletDesktop, connectWalletMobile } from '../utils/connectWallet'

describe('Create Contract', () => {
  context('Desktop ERC721A', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Select Contrat Type', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('[data-cy="cost"]').should('include.text', 'fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc721a > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc721a > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('[data-cy="cost"]').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC721Inputs[index])
      })
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc721a > button').contains('deploy').should('not.be.disabled')
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
      cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('[data-cy="cost"]').should('include.text', 'fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc1155 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc1155 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('[data-cy="cost"]').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC1155Inputs[index])
      })
    })

    it('Active Submit Button', () => {
      connectWalletDesktop()
      cy.get('#erc1155 > button').contains('deploy').should('not.be.disabled')
    })
  })

  context('Mobile ERC721A', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('Select Contract Type', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('[data-cy="cost"]').should('include.text', 'fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc721a > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc721a > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('[data-cy="cost"]').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC721Inputs[index])
      })
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc721a > button').contains('deploy').should('not.be.disabled')
    })
  })

  context('Mobile ERC1155', () => {
    before(() => {
      cy.visit('/create')
    })

    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('Select Contract Type', () => {
      cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
    })

    it('Fetching Cost Failed', () => {
      cy.get('[data-cy="cost"]').should('include.text', 'fetching failed')
    })

    it('Disabled Submit Button', () => {
      cy.get('#erc1155 > button').contains('connect wallet')
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc1155 > button').contains('deploy')
    })

    it('Fetching Cost Success', () => {
      cy.get('[data-cy="cost"]').should('not.include.text', 'fetching failed')
    })

    it('Fill Form', () => {
      cy.get('form').should('be.visible')
      cy.get('form input').each((el, index) => {
        cy.wrap(el).type(ERC1155Inputs[index])
      })
    })

    it('Active Submit Button', () => {
      connectWalletMobile()
      cy.get('#erc1155 > button').contains('deploy').should('not.be.disabled')
    })
  })
})
