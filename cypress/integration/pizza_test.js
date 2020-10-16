describe('form test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })


    const nameInput = () => cy.get('input[name=name]')
    const instructionsInput = () => cy.get('input[name=instructions]')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const pineapple = () => cy.get('input[name=pineapple]')
    const bacon = () => cy.get('input[name=bacon]')
    const olives = () => cy.get('input[name=olives]')
    const submitBtn = () => cy.get('button[name=submit]')
    it('name checker', () => {
        nameInput()
        .should('have.value', '')
        .type('test')
        .should('have.value', 'test')
    })
    it('instruction checker', () => {
        instructionsInput()
        .should('have.value', '')
        .type('testing')
        .should('have.value', 'testing')
    })

    it('overall checker', () => {
        submitBtn()
        .should('be.disabled')
        nameInput()
        .should('have.value', '')
        .type('test')
        .should('have.value', 'test')
        instructionsInput()
        .should('have.value', '')
        .type('testing')
        .should('have.value', 'testing')
        pepperoni()
        .click()
        pineapple()
        .click()
        bacon()
        .click()
        olives()
        .click()
        submitBtn()
        .should('be.disabled')
    })


})