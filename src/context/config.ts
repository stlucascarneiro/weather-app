import { createContext, Dispatch, SetStateAction } from 'react'

export type TLocale = 'pt-br' | 'es-es' | 'en-us'

export interface IConfig {
  locale: TLocale,
  setLocale?: Dispatch<SetStateAction<TLocale>>
  isMetricUnit: boolean
  setMetricUnit?: Dispatch<SetStateAction<boolean>>
}

export const ConfigContext = createContext<IConfig>({
  locale: 'pt-br',
  isMetricUnit: true
})