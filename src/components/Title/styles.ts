import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

interface H1Props {
  uppercase: boolean
}
export const H1 = styled.h1<H1Props>`
  width: 100%;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'};
  text-align: center;
  letter-spacing: 0.04em;
  font-size: 43px;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 30px;
  }
`
export const Subtitle = styled.label`
  width: 100%;
  text-align: center;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 14px;
  }
`