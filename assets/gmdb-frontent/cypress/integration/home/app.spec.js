// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import 'cypress-jest-adapter'
import '@testing-library/cypress/add-commands';

describe('E2E testings for movies app', () => {
    beforeEach(() => 
    {
        cy.visit(`http://localhost:3000/`)
    })
    it('test that we have a title to our page and header', () => 
    {
        cy.findByRole('heading').should('contain', `GMDB`)
    })
    it('pictures should appear on the home page', () => 
    {
        cy.findAllByRole('img').should('have.length', 28);
    })
    it('pictures should match movie titles', () =>
    {
        cy.findByAltText('Guardians of the Galaxy Vol. 2').click()

        cy.findByRole('heading').should('contain', `Guardians of the Galaxy Vol. 2`)
    })
    it('check if clicking multiple pictures helps', () =>{
        let images = cy.findAllByRole('img')
        console.log(images);

    })
    it('check if data appears', () => {
        cy.findByAltText('Guardians of the Galaxy Vol. 2').click()
        cy.findByRole('heading').should('contain', `Guardians of the Galaxy Vol. 2`)
        let list = cy.findAllByRole('list')
        list.should('contain', 'movieId')
        list.should('contain', 'metascore')
        list.should('contain', 'boxOffice')
        list.should('contain', 'website')
        list.should('contain', 'imdbRating')
        list.should('contain', 'imdbVotes')
        list.should('contain', 'runtime')
        list.should('contain', 'language')
        list.should('contain', 'rated')
        list.should('contain', 'production')
        list.should('contain', 'released')
        list.should('contain', 'imdbid')
        list.should('contain', 'plot')
        list.should('contain', 'director')
        list.should('contain', 'title')
        list.should('contain', 'actors')
        list.should('contain', 'response')
        list.should('contain', 'type')
        list.should('contain', 'awards')
        list.should('contain', 'dvd')
        list.should('contain', 'year')
        list.should('contain', 'poster')
        list.should('contain', 'country')
        list.should('contain', 'genre')
        list.should('contain', 'writer')



    })
    
})