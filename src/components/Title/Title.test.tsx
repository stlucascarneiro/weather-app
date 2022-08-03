import { cleanup, render, screen } from '@testing-library/react'
import { Title } from 'components'

describe('Title Renders', () => {
  it('The title', () => {
    render(
        <Title subtitle='Subtitle'>Title</Title>
    )

    const title = screen.getByRole('title')
    expect(title).toBeInTheDocument()
  })
  it('The subtitle', () => {
    const subtitle = screen.getByRole('subtitle')
    expect(subtitle).toBeInTheDocument()

    cleanup()
  })
})