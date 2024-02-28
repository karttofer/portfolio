import DescriptionComponent from '../src/components/DescriptionComponent.vue'

const mockData = {
    p1: "I remember the moment when I had the conversation that would completely change my life. A friend from school gave me the great idea of becoming a video game programmer. I remember that at that time, he mentioned that we should first enroll in a degree program to start programming. I didn't follow that advice and began to research on my own.",
    p2: "It wasn't until 2019 that I completely changed my goal and decided to become a Frontend Developer. Since then, I haven't stopped working and striving to improve every day as a developer.",
}

describe("<DescriptionComponent/>", () => {
    beforeEach(() => {
        cy.mount(DescriptionComponent);
    });

    it("paragraphs should have correct content", () => {
        const p1 = cy.get('[data-cy="description-component-p1"]');
        const p2 = cy.get('[data-cy="description-component-p2"]');

        const trim = _ => _.trim()
        // Use .invoke('text') for better text content matching
        p1.invoke('text').then(trim).should('eq', mockData.p1);
        p2.invoke('text').then(trim).should('eq', mockData.p2);
    });
});