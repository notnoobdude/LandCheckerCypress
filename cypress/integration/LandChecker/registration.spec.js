/// <reference types="cypress" />

  describe('Registration', function(){

    it('Registration - Check if the Page Title is consistent or not', () => {
        cy.visit('https://app.landchecker.com.au/join')
        cy.title().should('eq', 'Join | Landchecker')
    })


    it('Registration - Check existence of the registration page header', () => {
        cy.get('[data-test=appBar-contentMenu]').should('be.visible')
        cy.get('[data-test=appBar-home-link]').should('be.visible')
        cy.get('[data-test=appBar-logo-img]').should('be.visible')
    })


    it('Registration - First Name Requirement Error works as intended', () => {
        cy.get('[data-test=submitButton-button]')
        .scrollIntoView()
        .click()
        cy.get('[data-test=signUpForm-firstName]').find('p')
        .contains('First Name is required')
        .should('be.visible')
    })


    it('Registration - Last Name Requirement Error works as intended', () => {
        cy.get('[data-test=signUpForm-lastName]').find('p')
        .contains('Last Name is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Email Address Requirement Error works as intended', () => {
        cy.get('[data-test=signUpForm-email]').find('p')
        .contains('Email is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Password Requirement Error works as intended', () => {
        cy.get('[data-test=signUpForm-password]').find('p') 
        .contains('Password is required')
        .scrollIntoView()
        .should('be.visible')
    })

    it('Registration - Occupation Requirement Error works as intended', () => {
        cy.get('[data-test=signUpForm-occupation]').find('p') 
        .contains('Occupation is required')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - Terms of Use Requirement Error works as intended', () => {
        cy.get('[data-test=reduxCheckboxField-error]')
        .contains('Terms of Use must be accepted')
        .scrollIntoView()
        .should('be.visible')
    })


    it('Registration - First Name input field allows entry of string value', () => {
        cy.get('[data-test=signUpForm-firstName]').find('input')
        .scrollIntoView()
        .type('John')
        cy.get('[data-test=signUpForm-firstName]').find('p')
        .should('not.exist', 'First Name is required')
        cy.get('[data-test=signUpForm-firstName]').find('input')
        .should('have.value', 'John')
        .clear()
        .should('have.value', '')
    })


    it('Registration - Last Name input field allows entry of string value', () => {
        cy.get('[data-test=signUpForm-lastName]').find('input')
        .scrollIntoView()
        .type('Cena')
        cy.get('[data-test=signUpForm-lastName]').find('p')
        .should('not.exist', 'Last Name is required')
        cy.get('[data-test=signUpForm-lastName]').find('input')
        .should('have.value', 'Cena')
        .clear()
        .should('have.value', '')
    })


    it('Registration - Email input field allows entry of string value', () => {
        cy.get('[data-test=signUpForm-email]').find('input')
        .scrollIntoView()
        .type('johncena.123@testemail.com')
        cy.get('[data-test=signUpForm-email]').find('p')
        .should('not.exist', 'Email is required')
        cy.get('[data-test=signUpForm-email]').find('input')
        .should('have.value', 'johncena.123@testemail.com')
        .clear()
        .should('have.value', '')
    })

    it('Registration - Invalid Email Address Error is triggered', () => {
        cy.get('[data-test=signUpForm-email]').find('input')
        .scrollIntoView()
        .type('johncena.123@/')
        cy.get('[data-test=signUpForm-email]').find('p')
        .should('have.text', 'Invalid email address')
        .and('be.visible')
    })


    it('Registration - Password input field allows entry of string value', () => {
        cy.get('[data-test=signUpForm-password]').find('input')
        .scrollIntoView()
        .type('youcantseethispassword!123!')
        cy.get('[data-test=signUpForm-password]').find('p')
        .should('not.exist', 'Password is required')
        cy.get('[data-test=signUpForm-password]').find('input')
        .should('have.value', 'youcantseethispassword!123!')
        .clear()
        .should('have.value', '')
    })


    it('Registration - Company Name input field allows entry of string value', () => {
        cy.get('[data-test=signUpForm-company]').find('input')
        .scrollIntoView()
        .click()
        .type('John Cena Company')
        .should('have.value', 'John Cena Company')
        .clear()
        .should('have.value', '')
    })


    it('Registration - Check dropdown availability and choose Real Estate Agent in the given options', () => {
        cy.get('#select-occupation')
        .click()
        cy.get('#menu-occupation').should('be.visible')
        cy.get('[data-test=signUpForm-occupation-real_estate_agent]').click()
        cy.get('#select-occupation').should('have.text', 'Real Estate Agent')
    })


    it('Registration - Verify State Checkboxes if clickable or not', () => {
        cy.get('[data-test=signUpForm-state-NSW]').not('[disabled]').find('input')
        .check().should('be.checked')

        cy.get('[data-test=signUpForm-state-VIC]').not('[disabled]').find('input')
        .check().should('be.checked')

        cy.get('[data-test=signUpForm-state-QLD]').not('[disabled]').find('input')
        .check().should('be.checked')

        cy.get('[data-test=signUpForm-state-TAS]').not('[disabled]').find('input')
        .check().should('be.checked')

        cy.get('[data-test=signUpForm-state-SA]').not('[disabled]').find('input')
        .check().should('be.checked')
    })


    it('Registration - Verify Terms of Use checkbox if clickable or not', () => {
        cy.get('[data-test=signUpForm-acceptTerms]').not('[disabled]').find('input')
        .check().should('be.checked')
    })


    it('Registration - Verify Terms Of Use Redirect', () => {
        cy.get('[data-test=reduxCheckboxField-label]').find('a')
        .should('have.attr', 'href', 'https://s3-ap-southeast-2.amazonaws.com/landchecker-images/legals/terms-and-conditions.pdf')
        .and('have.attr','target', '_blank')
        .then(link => {
            cy.request(link.prop('href'))
            .its('status')
            .should('eq', 200)
        })
    })


    it('Registration - Verify Existence of Footer', () => {
        cy.get('[data-test=footer-toolbar]')
        .should('be.visible')
    })


    it('Registration - Verify Login Redirection', () => {
        cy.get('a[color="primary"]')
        .should('have.attr', 'href', '/login')
        .and('have.attr','color','primary')
        .then(link => {
            cy.request(link.prop('href'))
            .its('status')
            .should('eq', 200)
        })
    })

})
  