import { base } from './base'

export interface IAboutPage extends base {
  title?: string
  tagline?: string
  headerImg: {
    url: string
  }
}
