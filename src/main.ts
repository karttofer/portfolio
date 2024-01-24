/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */

// Dependences
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'

// Components
import App from './App.vue'

// Routers
import router from './router'

// Styles
import './assets/main.scss'
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Card', Card)
app.component('Image', Image)
app.component('Divider', Divider)
app.component('Tag', Tag)

app.mount('#app')
