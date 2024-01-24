import parcelApp from '../assets/imges/work-experience-01.png'
import drafty from '../assets/imges/work-experience-02.png'

// Interfaces
import type { IWorkHistoryObject, IPreviousProjects } from '../interfaces/globals'

export const experience: Array<IWorkHistoryObject> = [
  {
    companyUrl: 'https://fsbtech.com/',
    time: '2022 - Current',
    title: 'Frontend Developer · Fsb Tech',
    subTitle: 'React/Vue Developer',
    technologies: [
      'REACT',
      '/',
      'VUE',
      '/',
      'VUEX',
      '/',
      'SCSS',
      '/',
      'STYLED COMPONENTS',
      '/',
      'CYPRESS'
    ],
    descriptions: [
      'As the person in charge of creating User Interface (UI) pieces for the I-Gaming world, my goal is to facilitate the betting experience in casinos through intuitive and attractive design.',
      'I also provided support for our applications already in production, working intensively to ensure their proper functioning. I maintained constant communication with clients to understand their needs and ensure their satisfaction.'
    ]
  },
  {
    companyUrl: 'https://doublenines.co/',
    time: '1.1 Year',
    title: 'Frontend Developer · Double Nines',
    subTitle: 'Angular/Vue Developer',
    technologies: [
      'ANGULAR',
      '/',
      'JASMINE',
      '/',
      'KARMA',
      '/',
      'SCSS',
      '/',
      'TYPESCRIPT',
      '/',
      'VUE',
      'VUEX',
      'RUBY'
    ],
    descriptions: [
      'I collaborated with a team on an MVP for Ryder, crafting a project centered around Atomic Components, all of which we showcased in a StoryBook.',
      'Then, I worked on a project for the same company, "Whiplash," where I served as a Vue.js Developer on a Ruby-based project where the frontend was embedded within the backend.'
    ]
  },
  {
    companyUrl: 'https://www.likeu.co/',
    time: '1 Year',
    title: 'Frontend Developer · LikeU Colombia',
    subTitle: 'Angular Developer',
    technologies: [
      'ANGULAR',
      '/',
      'JASMINE',
      '/',
      'KARMA',
      '/',
      'SCSS',
      '/',
      'TYPESCRIPT',
      '/',
      'NGRX',
      '/',
      'INVISION',
      '/',
      'CHART.JS',
      '/',
      'APEXCHART'
    ],
    descriptions: [
      'I led a project for "Leonisa," where I undertook full application architecture and handled all testing responsibilities. I served as the sole Frontend Developer on this endeavor.'
    ]
  },
  {
    companyUrl: 'https://www.flydevs.com/',
    time: '5 Months',
    title: 'Frontend Developer · Flydevs',
    subTitle: 'React Developer',
    technologies: ['REACT', '/', 'POSTMAN', '/', 'ENZYME', 'JEST'],
    descriptions: [
      'Frontend Developer in charge, working with different technologies to build the necessary components and creating a mock API to consume it with requests using Axios.',
      'Additionally, I was responsible for architecting the entire application by providing estimates, creating tickets on the Jira board, and having meetings with the team to solve issues.'
    ]
  }
]

export const previousProjects: Array<IPreviousProjects> = [
  {
    imgSrc: drafty,
    title: '🔥 Quick Parcel App 🚀',
    description:
      '📦 Parcel as Webpack allows you to create a react project but Parcel have every configuration ready, so quick-parcel-app do the same thing that create-react-app do, but with Parcel',
    websiteUrl: 'https://parcelapp.netlify.app/',
    stars: 12,
    tags: [
      'react',
      'create-react-app',
      'parcel',
      'build-project',
      'parcel-create-app',
      'parcel-app',
      'quick-parcel-app'
    ]
  },
  {
    imgSrc: parcelApp,
    title: 'drafty-editor',
    description:
      "DraftyEditor as its name said, it's a editor of text that allows you to make amazing things with it",
    websiteUrl: 'https://github.com/karttofer/DraftEditor',
    stars: 11,
    tags: ['react', 'javascript', 'training', 'text', 'prettier', 'richtexteditor']
  }
]
