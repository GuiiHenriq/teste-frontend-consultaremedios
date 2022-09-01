describe("Fluxo - Game", ()=>{
	it('Acessar localhost', ()=>{
		cy.visit('http://localhost:3000/');
	});

	it('Adicionar game ao carrinho', ()=>{
		cy.get('[data-cy="btn-add-game"]').eq(0).invoke('show').click();
	});

	it('Verificar se foi adicionado ao carrinho', ()=>{
		cy.get('[data-cy="cart-game"]').eq(0).should('be.visible');
	});

	it('Remover game do carrinho', ()=>{
		cy.get('[data-cy="btn-remove-game"]').invoke('show').click({ multiple: true });
	});

	it('Verificar se foi removido do carrinho', ()=>{
		cy.get('[data-cy="cart-empty"]').should('be.visible');
	});
});