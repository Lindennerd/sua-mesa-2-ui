
describe('## Login', () => {

    before(() => {
        cy.logout();
    })

    it('visits the app root url', () => {
        cy.visit('/login');
        cy.contains('h1', 'Login');
    });

    it('log in using dev credentials', () => {
        cy.get('#email').type('luiz@gmail.com');
        cy.get('#password').type('123456');
        cy.get('#login').click();

        cy.contains('h1', 'Ola Mundo');
    });

    it('logout sucessfully',() => {
        cy.get('#logout').click();
        cy.contains('h1', 'Login');
    });

    it('fails to login with invalid credentials', () => {
        cy.get('#email').type('luiz@test.com');
        cy.get('#password').type('1234567');
        cy.get('#login').click();

        cy.contains('p', 'Credenciais inválidas');
    })
})