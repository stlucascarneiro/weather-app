import { TLocale } from 'context/config'

const capitalizeFirstLetter = (value: string, locale: TLocale) => {
  const remainingString = locale === 'pt-br' ? value.slice(1, -1) : value.slice(1)
  return value.charAt(0).toUpperCase() + remainingString
}

export const getDate = (numberDate: string, locale: TLocale) => {
  const date = new Date(`${numberDate}T00:00:00`)
  const weekDay = date.toLocaleString(locale, { weekday: 'short' })
  const day = date.getDate()
  const month = date.toLocaleString(locale, { month: 'short' })
  return `${capitalizeFirstLetter(weekDay, locale)}, ${day} ${capitalizeFirstLetter(month, locale)}`
}