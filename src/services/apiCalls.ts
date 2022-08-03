import { TLocale } from 'context/config'

export type TQuery = string | string[] | undefined
export interface IWeather {
  description: string
  icon: string
  name: string
  temperature: {
    main: number
    max: number
    min: number
  }
}

const apiLocale = {
  'pt-br': 'pt_br',
  'es-es': 'es',
  'en-us': 'us'
}

export const getWeather = async (lat: TQuery, lng: TQuery, units: TQuery, locale: TLocale): Promise<IWeather> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}1&lon=${lng}&units=${units}&lang=${apiLocale[locale]}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  const data: any = await fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })

  return {
    description: data.weather[0].description,
    temperature: {
      main: data.main.temp,
      max: data.main.temp_max,
      min: data.main.temp_min
    },
    icon: data.weather[0].icon.slice(0, -1),
    name: data.name
  }
}

export const getForecast = async (lat: TQuery, lng: TQuery, units: TQuery, locale: TLocale): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=${units}&lang=${apiLocale[locale]}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  const data: any = await fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })

  return data
}