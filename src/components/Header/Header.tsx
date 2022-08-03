// Config
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { ConfigContext } from 'context/config'
// Components
import { ArrowIcon, BackButton, Header, SwitchButton, SwitchContainer, SwitchThumb, Unit } from './styles'
// Assets

// Types

export const ComponentHeader = () => {
  const router = useRouter()
  const { isMetricUnit, setMetricUnit } = useContext(ConfigContext)

  const handleSwitchClick = (value: boolean) => {
    setMetricUnit!(value)
  }

  return (
    <Header>
      {router.pathname !== '/'
        ? <BackButton onClick={() => router.back()} role='backArrow'>
          <ArrowIcon/>
        </BackButton>
        : <div/>}
      <SwitchContainer>
        <Unit onClick={() => handleSwitchClick(false)}>°F</Unit>
        <SwitchButton onClick={() => handleSwitchClick(!isMetricUnit)} role='switch'>
          <SwitchThumb isMetric={isMetricUnit}/>
        </SwitchButton>
        <Unit onClick={() => handleSwitchClick(true)}>°C</Unit>
      </SwitchContainer>
    </Header>
  )
}