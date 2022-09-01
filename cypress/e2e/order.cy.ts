describe("Fluxo - Ordenação", ()=>{
	it('Acessar localhost', ()=>{
		cy.visit('http://localhost:3000/');
	});

	// Ordem - Score
	it('Validar ordem: POPULARIDADE', ()=>{
		cy.get('[data-cy="order-games"]').select('score');

		cy.get('[data-cy="list-games"]').should('be.visible');

		cy.get('[data-cy="name-game-card"]').eq(0).contains('Terra Média: Sombras de Mordor');
		cy.get('[data-cy="price-game-card"]').eq(0).contains('R$ 79,99');
	});

	// Ordem - Price
	it('Validar ordem: PREÇO', ()=>{
		cy.get('[data-cy="order-games"]').select('price');

		cy.get('[data-cy="list-games"]').should('be.visible');

		cy.get('[data-cy="name-game-card"]').eq(0).contains('Call Of Duty Infinite Warfare');
		cy.get('[data-cy="price-game-card"]').eq(0).contains('R$ 49,99');
	});
  
	// Ordem - Name
	it('Validar ordem: ALFABETICA', ()=>{
		cy.get('[data-cy="order-games"]').select('name');

		cy.get('[data-cy="list-games"]').should('be.visible');

		cy.get('[data-cy="name-game-card"]').eq(0).contains('Call Of Duty Infinite Warfare');
		cy.get('[data-cy="price-game-card"]').eq(0).contains('R$ 49,99');
	});
});