describe('Testing error form', () => {
	it('1. serch page', () => {
		cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
	});
	it('2. error username', () => {
		cy.get('form').within(() => {
			cy.get('input[name="username"]').type(user);
			cy.get('input[name="username"]').should('have.value', 'userError');
			cy.get('.form-group ').find('span').contains('No account found with that username.');

			cy.get('input[name="username"]').type(password);
			cy.get('input[name="password"]').should('have.value', 'passwordError');
	 		cy.get('.help-block').contains('Please enter your password.');

			cy.get('input').contains('Login').click();
		});
	});
	// it('3. error password', () => {
	// 	cy.get('form').within(() => {
	// 		cy.get('input[name="password"]').should('have.value', 'passwordError');
	// 		cy.get('.help-block').contains('Please enter your password.');

	// 		cy.get('input').contains('Login').click();
	// 	});
	// });
});

const user = 'UserTester';
const password = '123321Test';