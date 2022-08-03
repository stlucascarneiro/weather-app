import mockData from 'data/forecast.json'

export interface IForecastItem {
  date: string
  description: string
  icon: string
  tempMin: number
  tempMax: number
}

export const getForecastByDay = (data: typeof mockData) => {
  const weather: IForecastItem[] = []

  data.list.forEach(elem => {
    const date = elem.dt_txt.slice(0, 10)
    const isSameDay: boolean = weather.filter(e => (e.date === date)).length > 0

    if (!isSameDay) {
      weather.push({
        date,
        description: elem.weather[0].description,
        icon: elem.weather[0].icon.slice(0, -1),
        tempMin: elem.main.temp_min,
        tempMax: elem.main.temp_max
      })
    } else {
      if (elem.main.temp_min < weather[weather.length - 1].tempMin) {
        weather[weather.length - 1].tempMin = elem.main.temp_min
      }
      if (elem.main.temp_max > weather[weather.length - 1].tempMax) {
        weather[weather.length - 1].tempMax = elem.main.temp_max
      }
    }
  })

  if (weather.length > 5) {
    return weather.slice(1, 6)
  }

  return weather
}