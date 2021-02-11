import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

export const Basic: Story = (args) => (
  <Button {...args} onClick={action('Button is clicked!')}>
    Login
  </Button>
)
