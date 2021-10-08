describe('Testing login form for failed to login', () => {
	it('1. serch page', () => {
		cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
	});

	it('2. adding data to the form', () => {
		cy.get('input[name="username"]').type(user);
		cy.get('input[name="password"]').type(password);
	});

	it('3. validation of elements and data on the page', () => {
		cy.get('form').within(() => {
			cy.get('input[name="username"]').should('have.value', user);
			cy.get('input[name="password"]').should('have.value', password);

			cy.get('input').contains('Login').click();
		});
	});
});

const user = 'UserTester';
const password = '123321Test';