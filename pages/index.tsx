/* eslint-disable no-undef */
// Config
import { useContext, useState } from 'react'
import Router from 'next/router'
import { ConfigContext } from 'context/config'
// Components
import { LoadScriptNext, StandaloneSearchBox } from '@react-google-maps/api'
import { Input, Title } from 'components'
import { Body } from '../styles'
// Assets
import localeData from 'data/localeData.json'
// Types
interface IProps {
  libraries: ('places' | 'drawing' | 'geometry' | 'localContext' | 'visualization')[]
  gk: string
}

export const getStaticProps = () => {
  const props: IProps = {
    libraries: ['places'],
    gk: process.env.GOOGLE_API_KEY
  }
  return { props }
}

export default function Home({ libraries, gk }: IProps) {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>()
  const { isMetricUnit, locale } = useContext(ConfigContext)

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  const onPlacesChanged = () => {
    try {
      const places = searchBox!.getPlaces()
      if (places?.length === 1) {
        const place = places![0]
        const location = {
          lat: place?.geometry?.location?.lat(),
          lng: place?.geometry?.location?.lng()
        }
        Router.push({
          pathname: '/weather',
          query: {
            ...location,
            locale,
            units: isMetricUnit ? 'metric' : 'imperial'
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Body>
      <Title>
        {localeData[locale].index.title}
      </Title>
      <LoadScriptNext googleMapsApiKey={gk} libraries={libraries}>
          <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
            <Input placeholder={localeData[locale].index.input}/>
          </StandaloneSearchBox>
      </LoadScriptNext>
    </Body>
  )
}