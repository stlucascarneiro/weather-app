import { cleanup, render, screen } from '@testing-library/react'
import { ForecastWeather } from 'components'
import { ConfigContext } from 'context/config'
import { getForecastByDay } from 'utils/handleForecast'
import mockData from 'data/forecast.json'

describe('ForecastWeather Renders', () => {
  it('A list of five forecasts', () => {
    const data = getForecastByDay(mockData)
    render(
      <ConfigContext.Provider value={{ locale: 'pt-br', isMetricUnit: true }}>
        <ForecastWeather data={data} />
      </ConfigContext.Provider>
    )

    const element = screen.queryAllByRole('forecast')
    expect(element.length === 5).toBeTruthy()
  })

  it('The Date and day of the week', () => {
    const element = screen.queryAllByRole('date')
    expect(element.length === 5).toBeTruthy()
  })

  it('An icon representing the description', () => {
    const element = screen.queryAllByRole('icon')
    expect(element.length === 5).toBeTruthy()
  })

  it('The minimum and maximum temperature', () => {
    const max = screen.queryAllByRole('max')
    const min = screen.queryAllByRole('min')
    expect(max.length === 5).toBeTruthy()
    expect(min.length === 5).toBeTruthy()
  })

  it('A heat bar', () => {
    const element = screen.queryAllByRole('bar')
    expect(element.length === 5).toBeTruthy()
  })

  it('The description of the weather', () => {
    const element = screen.queryAllByRole('description')
    expect(element.length === 5).toBeTruthy()

    cleanup()
  })
})