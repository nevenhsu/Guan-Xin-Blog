import * as _ from 'lodash-es'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { env } from '@/utils/env'

interface GeneralState {
  preferLang: string
}

const initialState: GeneralState = {
  preferLang: 'en', // default language
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPreferLang(state, action: PayloadAction<string>) {
      const newLang = action.payload
      if (!_.includes(env.locales, newLang)) {
        const availableLangs = env.locales.join(', ')
        throw new Error(`Invalid language! Available languages are: ${availableLangs}`)
      }
      state.preferLang = action.payload
    },
  },
})

export const { setPreferLang } = generalSlice.actions
export default generalSlice.reducer
