// Dependenices
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest' 

// Component
import WorkHistoryCompnent from '../WorkHistoryComponent.vue'

describe("Work Historry Component", () => {
    it("should mount correctly", () => {
        const mountedComponent = mount(WorkHistoryCompnent)
        expect(mountedComponent).toBeTruthy()
    })
})