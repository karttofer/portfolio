import ProfileComponent from '../src/components/ProfileComponent.vue'

const mockData = {
    chips: [
        {
            label: 'REACT',
            size: 65
        },
        {
            label: 'ANGULAR',
            size: 93
        },
        {
            label: 'VUE',
            size: 65
        },
        {
            label: 'NODE',
            size: 65
        },
        {
            label: 'NESTJS',
            size: 166
        },
        {
            label: 'DOCKER',
            size: 92
        },
        {
            label: 'AWS',
            size: 65
        },
        {
            label: 'TDD',
            size: 65
        },
        {
            label: 'GRAPHQL',
            size: 87
        },
        {
            label: 'JS/HTML/CSS',
            size: 144
        }
    ]
}
describe("<ProfileComponent/>", () => {
    beforeEach(() => {
        cy.mount(ProfileComponent)

    })

    it("profile img should have correct attributes and values", () => {
        const profileElement = cy.get('[data-cy="profile-img"]');
        profileElement.should('have.attr', 'alt', 'profile')
        profileElement.should('have.attr', 'src', '/__cypress/src/src/assets/imges/my-image.jpg')
    })

    it("should have the correct name", () => {
        const profileElement = cy.get('[data-cy="profile-name"]');
        profileElement.should('have.text', 'Jhornan Colina')
    })

    it("field, location should be corrects", () => {
        const field = cy.get('[data-cy="profile-field"]');
        const location = cy.get('[data-cy="profile-location"]');

        const trim = _ => _.trim()
        // We changed this to Full Stack Developer in the deployment branch
        field.invoke('text').then(trim).should('eq', 'Remote Frontend Developer')
        location.invoke('text').then(trim).should('eq', 'Colombiaㅤ-ㅤContact Info')
    })

})