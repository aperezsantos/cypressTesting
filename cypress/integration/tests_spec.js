import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('URL Test', () => {
    it('Visits the Messages Demo page', () => {
        cy.visit('http://localhost:1234')
    })
  })

describe('Link Present', () => {
    it('Has an upgrade link', () => {
        cy.contains("a", "Upgrade here...");
    })
})

describe('Path of Link', () => {
    it('Link links to current page', () => {
        cy.contains("a", "Upgrade here...").click()
        cy.location('pathname').should('eq', '/')
    })
})

describe('Message Boxes Present', () => {
    it('Has 6 message boxes', () => {
        cy.get('.message').should('have.length', 6)
    })
})

describe('Phishing Message Box', () => {
    it('It should have a phishing scam message', () => {
        cy.get('.message--warning').should('have.text', 'Beware phishing scams!')
    })
})

describe('Red Error Message Box', () => {
    it('It should have the specified background color', () => {
        cy.get('.message--error').should('have.css', 'background-color').and('be.colored', '#ff4d4d');
    })
})

describe('Close Buttons Present', () => {
    it('Has 3 close buttons', () => {
        cy.get('.fa-times-circle').should('have.length', 3)
    })
})

describe('Click Close Button', () => {
    it('Should be able to click on a closed button', () => {
        cy.get('.fa-times-circle').click({multiple: true})
    })
})

describe('Click Close Button', () => {
    it('Should be able to click on a closed button', () => {
        cy.get('.fa-times-circle').click({multiple: true})
    })
})


describe('Alert Box Appears', () => {
    it('should trigger an alert with a message', () => {
        cy.get('.fa-times-circle').click({multiple: true});

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Add logic to close!');
        })
    })
})