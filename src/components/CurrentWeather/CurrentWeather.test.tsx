import { cleanup, render, screen } from '@testing-library/react'
import { CurrentWeather } from 'components'

describe('CurrentWeather Renders', () => {
  it('The description of the weather', () => {
    render(
        <CurrentWeather description='description' temperature={29} icon="iconPath" max={29} min={14}/>
    )

    const element = screen.getByRole('description')
    expect(element).toBeInTheDocument()
  })

  it('The temperature', () => {
    const element = screen.getByRole('temperature')
    expect(element).toBeInTheDocument()
  })

  it('An icon representing the description', () => {
    const element = screen.getByRole('icon')
    expect(element).toBeInTheDocument()
  })

  it('The minimum and maximum temperature', () => {
    const max = screen.getByRole('max')
    const min = screen.getByRole('min')
    expect(max).toBeInTheDocument()
    expect(min).toBeInTheDocument()

    cleanup()
  })
})