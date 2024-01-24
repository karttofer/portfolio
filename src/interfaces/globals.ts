export interface IWorkHistoryObject {
  time: string
  title: string
  subTitle: string
  technologies: Array<string>
  descriptions: Array<string>
  companyUrl: string
}

export interface IPreviousProjects {
  title: string
  description: string
  websiteUrl: string
  stars: number
  tags: Array<string>
  imgSrc: string
}
