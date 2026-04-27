describe('Login', () => {
    beforeEach(()=> {
    cy.visit('https://www.saucedemo.com/');
    });

    it('can login successfully', () => {
        // Arrange
        // cy.visit('https://www.saucedemo.com/');

        // Acting
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Assert
        cy.url().should('contains', 'inventory.html');
    });
    
    it('Adding to Cart successfully', () => {
        // Arrange

        // Acting
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Assert
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain', 'Remove');
    });

    it('Assert Checkout successfully', () => {
        // Arra nge

        // Acting
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        // Assert
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
    });

    it('Assert Checkout successfully', () => {
        // Arra nge

        // Acting
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        // Assert
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
    });
    
    it('Assert Order Created successfully', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cy.get('[data-test="firstName"]').type('Omar');
        cy.get('[data-test="lastName"]').type('Saeed');
        cy.get('[data-test="postalCode"]').type('2026');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');

    });

    it('Assert Total Price added correctly', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cy.get('[data-test="firstName"]').type('Omar');
        cy.get('[data-test="lastName"]').type('Saeed');
        cy.get('[data-test="postalCode"]').type('2026');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="total-label"]').should('contain', '$97.17');

    });

    it('Removing from Cart successfully', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '2');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');

    });

    it('Reset App State work correctly', () => {

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Assert
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');
        // cy.get('[data-test="primary-header"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="reset-sidebar-link"]').click();
        cy.get('#react-burger-cross-btn').click();
        // cy.get('[data-test="shopping-cart-badge"]').should('contain', '0');
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    });

    it('Assert Order Canceled successfully', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cy.get('[data-test="firstName"]').type('Omar');
        cy.get('[data-test="lastName"]').type('Saeed');
        cy.get('[data-test="postalCode"]').type('2026');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="cancel"]').click();
        cy.url().should('contains', 'inventory.html');

    });
    
    it('Open Products page successfully', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click();
        cy.get('[data-test="back-to-products"]').should('exist');

    });

   it('login wrong password error', () => {
        // Arrange
        // cy.visit('https://www.saucedemo.com/');

        // Acting
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('worng_password');
        cy.get('[data-test="login-button"]').click();

        // Assert
        cy.url().should('not.contains', 'inventory.html');
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Social Links redirect successfully', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        // cy.get('[data-test="social-linkedin"]').click();
        // cy.url().should('contains', 'https://www.linkedin.com/company/sauce-labs/');
        cy.get('[data-test="social-linkedin"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://www.linkedin.com/company/sauce-labs/');

    });


})
 
