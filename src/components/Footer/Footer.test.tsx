import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Footer } from 'components'

describe('Footer', () => {
  it('Change the application language', () => {
    const setLocale = jest.fn()
    render(
      <Footer setLocale={setLocale}/>
    )

    const element = screen.queryAllByRole('button')
    fireEvent.click(element[0])

    expect(setLocale).toHaveBeenCalled()

    cleanup()
  })
})