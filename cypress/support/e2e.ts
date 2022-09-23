/**
 * ***********************************************************************
 * This file is processed and loaded automatically before your test files.
 *
 * You can read more here:
 * https://on.cypress.io/configuration
 * ***********************************************************************
 */

import 'cypress-real-events/support'
import { injected } from './ethereum'
import assert = require('assert')

declare global {
  namespace Cypress {
    interface ApplicationWindow {
      ethereum: typeof injected
    }
    interface VisitOptions {
      serviceWorker?: true
    }
  }
}

// sets up the injected provider to be a mock ethereum provider with the given mnemonic/index
Cypress.Commands.overwrite(
  'visit',
  (original, url: string | Partial<Cypress.VisitOptions>, options?: Partial<Cypress.VisitOptions>) => {
    assert(typeof url === 'string')

    cy.intercept('/service-worker.js', options?.serviceWorker ? undefined : { statusCode: 404 }).then(() => {
      original({
        ...options,
        url,
        onBeforeLoad(win) {
          options?.onBeforeLoad?.(win)
          win.ethereum = injected
        },
      })
    })
  }
)

beforeEach(() => {
  // Alchemy security policies are based on Origin headers.
  // These are stripped by cypress because chromeWebSecurity === false; this adds them back in.
  cy.intercept(/alchemy.com/, (res) => {
    res.headers['origin'] = 'http://localhost:3000'
    res.continue()
  })
})

Cypress.on('uncaught:exception', (_err, _runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
