import { render } from '@redwoodjs/testing'

import StephenPage from './StephenPage'

describe('StephenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StephenPage />)
    }).not.toThrow()
  })
})
