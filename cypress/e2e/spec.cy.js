// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Turing Cafe Reservations', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "Sample",
          date: "12/12",
          time: "7:00",
          number: 2
        }
      ]
    });
    cy.visit('http://localhost:3000');
  });

  it('should display reservations when the page loads', () => {
    cy.get('article').should('have.length', 1);
    cy.get('article').first().contains("Sample");
  });

  it('should reflect data input in the form', () => {
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="name"]').should('have.value', 'John');

    cy.get('input[name="date"]').type('2022-12-12');
    cy.get('input[name="date"]').should('have.value', '2022-12-12');

  });

  it('should add a new reservation when the form is submitted', () => {
    cy.get('input[name="name"]').type('Parvin');
    cy.get('input[name="date"]').type('2022-12-12');
    cy.get('input[name="time"]').type('7:00');
    cy.get('input[name="number"]').type('4');

    cy.get('button').click();

    cy.get('article').should('have.length', 2);
    cy.get('article').last().contains('Parvin');
  });

});

describe('Turing Cafe Reservations Sad Paths', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show an error message if the API request fails', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 500,
      body: {}
    });

    cy.visit('http://localhost:3000');
    cy.contains('Error fetching reservations');
  });

  it('should not submit the form if any input is missing', () => {
    cy.get('input[name="name"]').type('John');

    cy.get('button').click();
    
    cy.get('article').should('have.length', 0);
    cy.contains('All fields are required'); 
  });

  it('should not add a reservation with invalid date or time', () => {
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="date"]').type('2020-12-12');
    cy.get('input[name="time"]').type('25:00');
    cy.get('input[name="number"]').type('4');

    cy.get('button').click();
    
    cy.get('article').should('have.length', 0);
    cy.contains('Invalid date or time'); 
  });
  
});
