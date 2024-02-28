import ChipsComponent from '../src/components/ChipsComponent.vue'

const mockConfig = {
    config: {
        label: "Jhornan",
        size: 10
    }
}

describe('<ChipsComponent/>', () => {
    it('should render well', () => {
        cy.mount(ChipsComponent, {
            propsData: {
               ...mockConfig
            }
        })
    })

    it('Div should have correct width-size', () => {
        cy.mount(ChipsComponent, {
            propsData: {
                ...mockConfig
            }
        })

        const element= cy.get('[data-cy="chips"]')
        element.should("have.css", "width", "10px")
    });


    it('Paragraph should have correct text', () => {
        cy.mount(ChipsComponent, {
            propsData: {
                ...mockConfig
            }
        })

        const element= cy.get('[data-cy="chips-text"]')
        element.should("have.html", "Jhornan")

    });

    it('should have correct hover color', () => {
        cy.mount(ChipsComponent, {
            propsData: {
                ...mockConfig
            }
        })

        const element= cy.get('[data-cy="chips"]')

        element.realHover().should('have.css', 'background',"rgb(99, 151, 255) none repeat scroll 0% 0% / auto padding-box border-box")
    });
})