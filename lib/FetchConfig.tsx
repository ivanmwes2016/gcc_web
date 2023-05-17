import { client } from '../lib/client'
import { IAboutPage } from './types/interfaces'

export class FetchConfig {
  static async GetAboutPageInformation(): Promise<IAboutPage> {
    const groq = `
        *[_type == 'aboutus'][0]{
            title,
              tagline,
              "slug": slug.current,
              "headerImg":image.asset ->{
                url
              },
              body[]{
                title,
                desc,
                ministers[0] ->{
                  slug,
                  "minImage": image.asset -> {
                    url
                  },
                  name,
                  bio,
                }
              }
            }
        `
    return client.fetch(groq)
  }
}
