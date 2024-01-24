// Dependenices
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest' 

// Component
import ProfileCompnent from '../ProfileComponent.vue'

describe("Profile Component", () => {
    it("should mount correctly", () => {
        const mountedComponent = mount(ProfileCompnent)
        expect(mountedComponent).toBeTruthy()
    })
})