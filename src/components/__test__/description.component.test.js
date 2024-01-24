// Dependenices
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest' 

// Component
import DescriptionComponent from '../DescriptionComponent.vue'

describe("Description Component", () => {
    it("should mount correctly", () => {
        const mountedComponent = mount(DescriptionComponent)
        expect(mountedComponent).toBeTruthy()
    })
})