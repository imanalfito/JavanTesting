describe('Javan Website', () => {
    it('It should load to Product & Services Page', () => {
    cy.visit('https://javan.co.id/product/optimization')
    cy.url()
    cy.get(':nth-child(4) > .dropdown > button > .text-base').should('be.visible')
    cy.get('.pb-6 > .flex-col > .flex').should('be.visible').click()
    })
    it('It Should display to product development', () => {
        cy.visit('https://javan.co.id/product/development')
        cy.url()
        cy.get('.text-4xl > .block').should('be.visible')
        cy.get('.pb-6 > .flex-col > .flex').click()
        
    })
    it('It Should display to Data Analyst', () => {
        cy.visit('https://javan.co.id/product/analytics')
        cy.url()
        cy.get('.text-4xl > .block').should('be.visible')
        cy.get('.pb-6 > .flex-col > .flex').click()
        
    })
})