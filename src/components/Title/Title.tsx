// Config
// Components
import { H1, Subtitle, Title } from './styles'
// Assets
// Types
import { CSSProperties } from 'react'
interface IProps {
  children: string
  subtitle?: string
  uppercase?: boolean
  style?: CSSProperties
}

export const ComponentTitle = ({ children, subtitle, uppercase = false, style }: IProps) => {
  return (
      <Title>
        <H1 role='title' uppercase={uppercase} style={style}>{children}</H1>
        {subtitle && <Subtitle role='subtitle'>{subtitle}</Subtitle>}
      </Title>
  )
}