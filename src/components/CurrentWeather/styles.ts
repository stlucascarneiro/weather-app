import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export const CurrentWeather = styled.div`
  margin-top: 0.5rem;
`
export const Description = styled.p`
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;
  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 14px;
  }
`
export const Temperature = styled.p`
  font-size: 64px;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 48px;
  }
`
export const Icon = styled.img`
  @media ${Breakpoints.getBelow('tablet')} {
    width: 54px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TemperatureVariation = styled.p`
  margin: 0 4px;
  font-size: 20px;
`
export const Abbr = styled.abbr`
  font-weight: 700;
  text-decoration: none;
`