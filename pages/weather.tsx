// Config
import { GetServerSideProps } from 'next'
import { useContext, useEffect, useState } from 'react'
import { ConfigContext } from 'context/config'
import { useRouter } from 'next/router'
// Components
import { CurrentWeather, Title } from 'components'
import Link from 'next/link'
import { Anchor, Body } from '../styles/weather'
import NProgress from 'nprogress'
// Assets
import { getWeather, IWeather } from 'services/apiCalls'
import localeData from 'data/localeData.json'
// Types
interface IProps {
  data: IWeather,
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.units) query.units = 'metric'
  const locale: any = query.locale
  const data: IWeather = await getWeather(query.lat, query.lng, query.units, locale)
  return { props: { data } }
}

export default function Weather(props: IProps) {
  const { isMetricUnit, locale } = useContext(ConfigContext)
  const [firstLoad, setFirstLoad] = useState(true)
  const [data, setData] = useState<IWeather>(props.data)
  const router = useRouter()

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
    } else {
      NProgress.start()
      const { lat, lng } = router.query
      const units = isMetricUnit ? 'metric' : 'imperial'
      const fetchData = async () => {
        await getWeather(lat, lng, units, locale)
          .then((res) => {
            setData(res)
          })
      }
      fetchData()
      NProgress.done()
    }
  }, [locale, isMetricUnit])

  return (
    <Body>
      <Title uppercase={true}>
        {data.name}
      </Title>
      <CurrentWeather description={data.description} temperature={data.temperature.main} icon={data.icon} max={data.temperature.max} min={data.temperature.min}/>
      <Link href={{ pathname: '/forecast', query: { ...router.query, units: isMetricUnit ? 'metric' : 'imperial' } }}>
        <Anchor>{localeData[locale].weather}</Anchor>
      </Link>
    </Body>
  )
}