import styled from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'
import { Breakpoints } from 'utils/breakpoints'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 50px 50px 0 50px;
`
export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: .3s;

  &:hover{
    color: #1163a9;
    transition: .3s;
  }
`
export const ArrowIcon = styled(BiArrowBack)`
  font-size: 44px;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 24px;
  }
`
export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Unit = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
`
export const SwitchButton = styled.button`
  width: 50px;
  height: 30px;
  position: relative;
  background-color: #D2B3C1;
  border: none;
  border-radius: 20px;
  margin: 0 0.5rem;
  cursor: pointer;
  
  @media ${Breakpoints.getBelow('tablet')} {
    width: 40px;
    height: 20px;
  }
`
interface ISwitchThump {
  isMetric: boolean
}
export const SwitchThumb = styled.div<ISwitchThump>`
  width: 20px;
  height: 20px;

  position: absolute;
  left: ${({ isMetric }) => isMetric ? '25px' : '5px'};
  top: 5px;

  background-color: #D9D9D9;
  border-radius: 50%;

  transition: ease-out .3s;

  @media ${Breakpoints.getBelow('tablet')} {
    width: 14px;
    height: 14px;
    left: ${({ isMetric }) => isMetric ? '20px' : '5px'};
    top: 3px;
  }
`