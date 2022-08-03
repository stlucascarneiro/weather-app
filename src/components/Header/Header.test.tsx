import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { createMockRouter } from 'utils/test/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Header } from 'components'
import { ConfigContext } from 'context/config'

describe('Header', () => {
  const router = createMockRouter({})
  router.pathname = '/test'
  const setMetricUnit = jest.fn()

  it('Navigate to previous page', () => {
    render(
      <RouterContext.Provider value={router}>
        <ConfigContext.Provider value={{ locale: 'pt-br', isMetricUnit: true, setMetricUnit }}>
          <Header/>
        </ConfigContext.Provider>
      </RouterContext.Provider>
    )
    const button = screen.getByRole('backArrow')
    fireEvent.click(button)

    expect(router.back).toHaveBeenCalled()
  })

  it('Switch temperature unit between metric and imperial', () => {
    const switchButton = screen.getByRole('switch')
    fireEvent.click(switchButton)
    expect(setMetricUnit).toHaveBeenCalled()

    cleanup()
  })
})