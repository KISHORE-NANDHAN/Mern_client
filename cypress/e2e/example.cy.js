// this is where 

describe('Open home page',()=>{
    it('should open home page',()=>{
        cy.visit('/');
        //visit('url') to visit the url
        cy.contains('Welcome')
    })

})