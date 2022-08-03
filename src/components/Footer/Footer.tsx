// Config
import { Dispatch, SetStateAction, useContext } from 'react'
import { ConfigContext, TLocale } from 'context/config'
// Components
import { Container, Description, Flag, Footer, LocaleButton } from './styles'
// Assets
import localeData from 'data/localeData.json'
// Types
interface IProps {
  setLocale: Dispatch<SetStateAction<TLocale>>
}

export const ComponentFooter = ({ setLocale }: IProps) => {
  const { locale } = useContext(ConfigContext)
  return (
    <Footer>
      <Container>
        <LocaleButton onClick={() => setLocale('pt-br')}>
          <Flag src='images/brasil.png'/>
        </LocaleButton>
        <LocaleButton onClick={() => setLocale('en-us')}>
          <Flag src='images/us.png'/>
        </LocaleButton>
        <LocaleButton onClick={() => setLocale('es-es')}>
          <Flag src='images/spain.png'/>
        </LocaleButton>
      </Container>
      <Description>{localeData[locale].footer}</Description>
    </Footer>
  )
}