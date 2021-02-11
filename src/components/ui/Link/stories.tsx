import { Story, Meta } from '@storybook/react/types-6-0'
import Link from './Link'

export default {
  title: 'Link',
  component: Link,
} as Meta

export const Basic: Story = (args) => (
  <Link {...args} href="#">
    Link
  </Link>
)
