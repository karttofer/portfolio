// Dependenices
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest' 

// Component
import HomeView from '../HomeView.vue'

describe("Home Component", () => {
    it("should mount correctly", () => {
        const mountedComponent = mount(HomeView)
        expect(mountedComponent).toBeTruthy()
    })
})