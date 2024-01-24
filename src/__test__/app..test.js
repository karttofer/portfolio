// Dependencies
import {describe,it,expect} from 'vitest'
import { mount } from '@vue/test-utils'

// Dependencies
import App from '../App.vue'

describe('App Component', () => {
    it("should mount correctly", () => {
        const mountedComponent = mount(App)
        expect(mountedComponent).toBeTruthy()
    })
})