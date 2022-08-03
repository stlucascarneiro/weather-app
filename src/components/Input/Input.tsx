/* eslint-disable no-undef */
// Config
// Components
import { Input } from './styles'
// Assets

// Types
interface IProps {
  placeholder: string
}

export const ComponentInput = ({ placeholder }: IProps) => {
  return (
    <Input placeholder={placeholder}/>
  )
}