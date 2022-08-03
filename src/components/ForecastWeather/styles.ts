import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export const ForecastWeather = styled.div`
  margin-top: 90px;
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Date = styled.h2`
  font-size: 20px;
  width: 150px;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 14px;
    width: 110px;
  }
`
export const Icon = styled.img`
  width: 40px;
  height: 40px;

  margin: 0 2rem;

  @media ${Breakpoints.getBelow('tablet')} {
    margin: 0 0.75rem 0 0;
    width: 30px;
    height: 30px;
  }
`
export const HeatBar = styled.div`
  width: 175px;
  height: 4px;

  margin: 0 20px;

  background: linear-gradient(90deg, rgba(181,198,155,1) 0%, rgba(224,151,42,1) 100%);

  @media ${Breakpoints.getBelow('tablet')} {
    margin: 0 12px;
    width: 96px;
  }
`
export const Temperature = styled.p`
  width: 40px;

  @media ${Breakpoints.getBelow('tablet')} {
    width: 20px;
  }
`
export const Description = styled.p`
  margin-left: 1rem;
  width: fit-content;

  @media ${Breakpoints.getBelow('tablet')} {
    display: none;
  }
`