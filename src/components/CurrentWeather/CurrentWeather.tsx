// Config
// Components
import { Abbr, Container, CurrentWeather, Description, Icon, Temperature, TemperatureVariation } from './styles'
// Assets
// Types
interface IProps {
  description: string
  temperature: number
  icon: string
  max: number
  min: number
}

export const ComponentCurrentWeather = ({ description, temperature, icon, max, min }: IProps) => {
  return (
      <CurrentWeather>
        <Description role='description'>{description}</Description>
        <Container>
          <Temperature role='temperature'>{Math.round(temperature)}°</Temperature>
          <Icon role='icon' src={`http://openweathermap.org/img/wn/${icon}d@2x.png`} alt={`ícone representando ${description}`}/>
        </Container>
        <Container>
          <TemperatureVariation role='max'>
            <Abbr title='Máxima'>MAX</Abbr>: {Math.round(max)}°
          </TemperatureVariation>
          <TemperatureVariation role='min'>
            <Abbr title='Mínima'>MIN</Abbr>: {Math.round(min)}°
          </TemperatureVariation>
        </Container>
      </CurrentWeather>
  )
}