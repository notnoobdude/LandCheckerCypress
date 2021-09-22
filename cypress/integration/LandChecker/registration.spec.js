/// <reference types="cypress" />

  describe('Registration', function(){

    it('Registration - Check if the Page Title is consistent or not', () => {
        cy.visit('https://app.landchecker.com.au/join')
        cy.title().should('eq', 'Join | Landchecker')
    })


    it('Registration - Check existence of the registration page header', () => {
        cy.get('div:nth-child(3) div.jss40 header.jss64.jss66.jss55.jss56.jss62.mui-fixed.jss41:nth-child(1) div.jss91.jss93.jss92.jss43 > div.jss51.jss42')
        .should('be.visible')
    })


    it('Registration - First Name Requirement Error works as intended', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(8) > button')
        .scrollIntoView()
        .click()

        cy.wait(1000)

        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss331 > p')
        .contains('First Name is required')
        .should('be.visible')
    })


    it('Registration - Last Name Requirement Error works as intended', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss332 > p')
        .contains('Last Name is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Email Address Requirement Error works as intended', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(2) > p')
        .contains('Email is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Password Requirement Error works as intended', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(3) > p')
        .contains('Password is required')
        .scrollIntoView()
        .should('be.visible')
    })

    it('Registration - Occupation Requirement Error works as intended', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(4) > div.jss333.jss334.jss336.jss332 > p')
        .contains('Occupation is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Terms of Use Requirement Error works as intended', () => {
        cy.get('#root > div > div > div > div > div.jss111 > form > div:nth-child(6) > p')
        .contains('Terms of Use must be accepted')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - First Name input field allows entry of string value', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss331 > div > input')
        .scrollIntoView()
        .type('John')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss331 > p')
        .should('not.exist', 'First Name is required')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss331 > div > input')
        .should('have.value', 'John')
        .clear()
        .should('have.value', '')
        //slow typing
        .type('John', { delay: 100 })
        .should('have.value', 'John')
    })


    it('Registration - Last Name input field allows entry of string value', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss332 > div > input')
        .scrollIntoView()
        .type('Cena')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss332 > p')
        .should('not.exist', 'Last Name is required')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(1) > div.jss333.jss334.jss336.jss332 > div > input')
        .should('have.value', 'Cena')
        .clear()
        .should('have.value', '')
        //slow typing
        .type('Cena', { delay: 100 })
        .should('have.value', 'Cena')
    })


    it('Registration - Email input field allows entry of string value', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(2) > div > input')
        .scrollIntoView()
        .type('johncena.123@testemail.com')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(2) > p')
        .should('not.exist', 'Email is required')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(2) > div > input')
        .should('have.value', 'johncena.123@testemail.com')
        .clear()
        .should('have.value', '')
        //slow typing
        .type('johncena.123@testemail.com', { delay: 100 })
        .should('have.value', 'johncena.123@testemail.com')
    })


    it('Registration - Password input field allows entry of string value', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(3) > div > input')
        .scrollIntoView()
        .type('youcantseethispassword!123!')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(3) > p')
        .should('not.exist', 'Password is required')
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(3) > div > input')
        .should('have.value', 'youcantseethispassword!123!')
        .clear()
        .should('have.value', '')
        //slow typing
        .type('youcantseethispassword!123!', { delay: 100 })
        .should('have.value', 'youcantseethispassword!123!')
    })


    it('Registration - Company Name input field allows entry of string value', () => {
        cy.get('#root > div > div > div > div > div.jss111 > form > div:nth-child(4) > div.jss333.jss334.jss336.jss331 > div > input')
        .scrollIntoView()
        .click()
        .type('John Cena Company')
        .should('have.value', 'John Cena Company')
        .click()
        .clear()
        .should('have.value', '')
        //slow typing
        cy.get('#root > div > div > div > div > div.jss111 > form > div:nth-child(4) > div.jss333.jss334.jss336.jss331 > div > input')
        .click()
        .type('John Cena Company', { delay: 100 })
        .should('have.value', 'John Cena Company')
    })


    it('Registration - Check dropdown availability and choose Real Estate Agent in the given options', () => {
        cy.get('#select-occupation')
        .click()
        cy.get('#menu-occupation > div.jss64.jss408.jss74.jss65.jss409')
        .should('be.visible')
        cy.get('#menu-occupation > div.jss64.jss408.jss74.jss65.jss409 > ul > li:nth-child(2)')
        .click()
        cy.get('#select-occupation')
        .should('have.text', 'Real Estate Agent')
    })


    it('Registration - Verify State Checkboxes if clickable or not', () => {
        cy.get('[name="NSW"]').not('[disabled]')
        .check().should('be.checked')

        cy.get('[name="VIC"]').not('[disabled]')
        .check().should('be.checked')

        cy.get('[name="QLD"]').not('[disabled]')
        .check().should('be.checked')

        cy.get('[name="TAS"]').not('[disabled]')
        .check().should('be.checked')

        cy.get('[name="SA"]').not('[disabled]')
        .check().should('be.checked')
    })


    it('Registration - Verify Terms of Use checkbox if clickable or not', () => {
        cy.get('[name="accepted_terms"]').not('[disabled]')
        .check().should('be.checked')
    })


    it('Registration - Verify Terms Of Use Redirect', () => {
        cy.get('div > div > div > div > div.jss111 > form > div:nth-child(6) > label > span.jss261.jss269.jss419 > legend > a')
        .should('have.attr', 'href', 'https://s3-ap-southeast-2.amazonaws.com/landchecker-images/legals/terms-and-conditions.pdf')
        .and('have.attr','target', '_blank')
        .then(link => {
            cy.request(link.prop('href'))
            .its('status')
            .should('eq', 200)
        })
    })


    it('Registration - Verify Existence of Footer', () => {
        cy.get('body:nth-child(2) div:nth-child(3) div.jss40 header.jss64.jss66.jss55.jss59.jss62.jss118:nth-child(3) > div.jss91.jss94.jss92.jss119')
        .should('be.visible')
    })


    it('Registration - Verify Login Redirection', () => {
        cy.get('div > div > div > div > div.jss111 > h6 > a')
        .should('have.attr', 'href', '/login')
        .then(link => {
            cy.request(link.prop('href'))
            .its('status')
            .should('eq', 200)
        })
    })

})
  