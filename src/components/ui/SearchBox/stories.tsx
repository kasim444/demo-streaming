import { Story, Meta } from '@storybook/react/types-6-0'
import SearchBox from './SearchBox'

export default {
  title: 'SearchBox',
  component: SearchBox,
} as Meta

export const Basic: Story = (args) => (
  <SearchBox onChange={(e) => e.target.value} {...args} />
)
