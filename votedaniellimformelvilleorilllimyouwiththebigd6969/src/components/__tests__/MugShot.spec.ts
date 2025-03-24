import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MugShot from '../MugShot.vue'

describe('MugShot', () => {
  it('renders properly', () => {
    const wrapper = mount(MugShot, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
