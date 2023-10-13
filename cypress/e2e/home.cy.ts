describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should display the title', () => {
    cy.contains('Liste de Start-ups recherchant des Bêta-Testeurs').should(
      'be.visible',
    );
  });
  it('should display the names of the startups', () => {
    cy.contains('TechSolutions Inc.').should('be.visible');
    cy.contains('HealthTrack Ltd.').should('be.visible');
    cy.contains('EcoDrive Co.').should('be.visible');
  });
  it('should display the description of the startups', () => {
    cy.contains(
      'Une entreprise technologique innovante spécialisée dans les solutions IoT pour la maison intelligente.',
    ).should('be.visible');
    cy.contains(
      'Une start-up dans le domaine de la santé proposant une application de suivi de la condition physique et du bien-être.',
    ).should('be.visible');
    cy.contains(
      'Start-up spécialisée dans les solutions logicielles pour voitures électriques.',
    ).should('be.visible');
  });

  it('should display the Recherche', () => {
    cy.contains(
      'Des testeurs familiarisés avec les appareils domestiques connectés.',
    ).should('be.visible');
    cy.contains('Des testeurs passionnés par la santé et le fitness.').should(
      'be.visible',
    );
    cy.contains('Testeurs possédant une voiture électrique ou hybride.').should(
      'be.visible',
    );
  });
});

export {};
