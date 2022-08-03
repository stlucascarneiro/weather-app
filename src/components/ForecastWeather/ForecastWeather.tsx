// Config
import { ConfigContext } from 'context/config'
import { useContext } from 'react'
// Components
import { ForecastWeather, ItemContainer, Date, Icon, Temperature, HeatBar, Description } from './styles'
// Assets
import { getDate } from 'utils/handleDate'
// Types
import { IForecastItem } from 'utils/handleForecast'
interface IProps {
  data: IForecastItem[]
}

export const ComponentForecastWeather = ({ data }: IProps) => {
  const { locale } = useContext(ConfigContext)

  const Item = ({ date, icon, tempMin, tempMax, description }: IForecastItem) => {
    return (
      <ItemContainer role="forecast">
        <Date role="date">{getDate(date, locale)}</Date>
        <Icon src={`http://openweathermap.org/img/wn/${icon}d@2x.png`} alt={`ícone representando ${description}`} role="icon"/>
        <Temperature role="min">{Math.round(tempMin)}°</Temperature>
        <HeatBar role="bar"/>
        <Temperature role="max">{Math.round(tempMax)}°</Temperature>
        <Description role="description">{description}</Description>
      </ItemContainer>
    )
  }

  return (
      <ForecastWeather>
        {data.map((elem, index) => (
          <Item key={index} date={elem.date} icon={elem.icon} tempMin={elem.tempMin} tempMax={elem.tempMax} description={elem.description}/>
        ))}
      </ForecastWeather>
  )
}