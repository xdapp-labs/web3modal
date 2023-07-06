import type { Meta } from '@storybook/web-components'
import { searchSvg } from '@web3modal/ui/src/assets/svg/search'
import '@web3modal/ui/src/composites/wui-input'
import '../../components/gallery-container'
import type { WuiInput } from '@web3modal/ui/src/composites/wui-input'
import { html } from 'lit'

type Component = Meta<WuiInput>

export default {
  title: 'Composites/wui-input',
  args: {
    size: 'sm',
    placeholder: 'Search wallet',
    icon: searchSvg,
    disabled: false
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} as Component

export const Default: Component = {
  render: args =>
    html`<gallery-container width="336">
      <wui-input
        size=${args.size}
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        .icon=${args.icon}
      ></wui-input
    ></gallery-container>`
}