// Config
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Router from 'next/router'
import { ConfigContext, TLocale } from 'context/config'
import GlobalStyle from '../styles/global'
// Components
import { Footer, Header } from 'components'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/global.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState<TLocale>('pt-br')
  const [isMetricUnit, setMetricUnit] = useState<boolean>(true)
  return (
    <>
      <GlobalStyle />
      <ConfigContext.Provider value={{ locale, setLocale, isMetricUnit, setMetricUnit }}>
        <Header/>
        <Component {...pageProps}/>
        <Footer setLocale={setLocale}/>
      </ConfigContext.Provider>
    </>
  )
}