// Dependences
import { mount } from '@vue/test-utils'
import {describe, it , expect} from 'vitest'

// Component
import ProjectView from '../ProjectsView.vue'


describe('Project Component', () => {
    it('should mount correctly', () => {
        const mountedComponent = mount(ProjectView)
        expect(mountedComponent).toBeTruthy()
    })
})