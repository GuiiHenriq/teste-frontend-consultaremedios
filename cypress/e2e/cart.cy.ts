describe("Fluxo - Carrinho", ()=>{
	it('Acessar localhost', ()=>{
		cy.visit('http://localhost:3000/');
	});

	it('Adicionar game ao carrinho', ()=>{
		cy.get('[data-cy="btn-add-game"]').eq(0).invoke('show').click();
	});

	it('Verificar se foi adicionado ao carrinho', ()=>{
		cy.get('[data-cy="cart-game"]').eq(0).should('be.visible');
		cy.get('[data-cy="name-game-cart"]').eq(0).contains('Call Of Duty Infinite Warfare');
		cy.get('[data-cy="price-game-cart"]').eq(0).contains('R$ 49,99');
	});

	it('Verificar valores do game', ()=>{
		cy.get('.cart__infos').should('be.visible');
		cy.get('[data-cy="subtotal-cart"]').contains('R$ 49,99');
		cy.get('[data-cy="frete-cart"]').contains('R$ 10,00');
		cy.get('[data-cy="price-cart"]').contains('R$ 59,99');
	});

	it('Verificar valores do frete', ()=>{
		// Soma do Frete
		cy.get('[data-cy="btn-add-game"]').eq(0).invoke('show').click();
		cy.get('[data-cy="frete-cart"]').contains('R$ 20,00');

		// Frete Grátis
		cy.get('[data-cy="btn-add-game"]').eq(1).invoke('show').click();
		cy.get('[data-cy="frete-cart"]').contains('R$ 0,00');
	});
});