import React from 'react'
import reactDom from 'react-dom'

import { it } from 'eslint/lib/rule-tester/rule-tester'
import Form from './componants/Form'

it('renders without crashing', () => {
  const div = document.createElement('div')
  reactDom.render(<Form />, div)
})