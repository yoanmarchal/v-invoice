import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Invoice from '../../src/components/Invoice.vue'

describe('Invoice.vue', () => {
  const mockProps = {
    devis: {
      id: 1,
      date: new Date().toISOString(),
      alreadypaid: 100,
      'invoice-item': []
    },
    config: {
      title: 'Test Invoice',
      LegalInfos: 'Legal info',
      footerContent: 'Footer'
    },
    products: [],
    from: { id: 1 },
    to: { id: 2 }
  }

  it('renders the invoice component', () => {
    const wrapper = mount(Invoice, {
      props: mockProps
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
  })

  it('displays the invoice title from config', () => {
    const wrapper = mount(Invoice, {
      props: mockProps
    })
    // Component renders, title is displayed via template
    expect(wrapper.vm.title).toBe('Test Invoice')
  })
})
