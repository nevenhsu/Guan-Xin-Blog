import type { Mongoose } from 'mongoose'
import type { AxiosResponse } from 'axios'
import en from '../messages/en.json'

type Messages = typeof en // for next-intl

declare global {
  interface IntlMessages extends Messages {}

  interface Error {
    response?: AxiosResponse
  }

  namespace NodeJS {
    interface ProcessEnv {
      // Private
      SANITY_API_READ_TOKEN: string

      // Public
      NEXT_PUBLIC_NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_TIME_ZONE: string
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_COLOR_SCHEME: 'dark' | 'light'
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string

      /// sanity
      NEXT_PUBLIC_SANITY_PROJECT_ID: string
      NEXT_PUBLIC_SANITY_DATASET: string
      NEXT_PUBLIC_SANITY_API_VERSION: string
      NEXT_PUBLIC_SANITY_CDN: 'true' | 'false'
    }
  }
}
