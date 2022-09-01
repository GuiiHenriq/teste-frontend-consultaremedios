it('Fluxo - Requisição', ()=>{
	cy.visit('http://localhost:3000/');
	
	cy.request({
		method: 'GET',
		url: 'https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json',
		failOnStatusCode: true,
	}).as('response');
	cy.get('@response').should((response)=>{
		expect(response.status).to.equal(200);
	});
});