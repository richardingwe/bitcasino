describe("search", () => {
	it("user can search coin", () => {
		// user visits the app
		cy.visit("localhost:3000");

		// add BTC coin code
		cy.findByRole("textbox", {
			name: /cryptocurrency code/i,
		}).type("BTC");

		// click on the add button
		cy.findByRole("button", { name: /add/i }).click();

		// find BTC list-item
		cy.findByRole("listitem", {
			name: /btc/i,
		})
			.findByRole("button", {
				name: /delete btc/i,
			})
			.click({ force: true });
	});
});

export {};
