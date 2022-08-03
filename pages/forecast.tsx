// Config
import { GetServerSideProps } from 'next'
import { useContext, useEffect, useState } from 'react'
import { ConfigContext } from 'context/config'
import { useRouter } from 'next/router'
// Components
import { ForecastWeather, Title } from 'components'
import { Body } from '../styles/forecast'
import NProgress from 'nprogress'
// Assets
import { getForecastByDay, IForecastItem } from 'utils/handleForecast'
import { getForecast } from 'services/apiCalls'
import localeData from 'data/localeData.json'
// Types
interface IProps {
  data: IForecastItem[]
  location: string
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.units) query.units = 'metric'
  const locale: any = query.locale
  const data: any = await getForecast(query.lat, query.lng, query.units, locale)
  const props: IProps = {
    data: getForecastByDay(data),
    location: data.city.name
  }
  return { props }
}

export default function Forecast(props: IProps) {
  const { locale, isMetricUnit } = useContext(ConfigContext)
  const [firstLoad, setFirstLoad] = useState(true)
  const [data, setData] = useState(props.data)
  const router = useRouter()

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
    } else {
      NProgress.start()
      const { lat, lng } = router.query
      const units = isMetricUnit ? 'metric' : 'imperial'
      const fetchData = async () => {
        await getForecast(lat, lng, units, locale)
          .then((res) => {
            setData(getForecastByDay(res))
          })
      }
      fetchData()
      NProgress.done()
    }
  }, [locale, isMetricUnit])

  return (
    <Body>
      <Title subtitle={localeData[locale].forecast} uppercase={true}>
        {props.location}
      </Title>
      <ForecastWeather data={data}/>
    </Body>
  )
}