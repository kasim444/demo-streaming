import { Story, Meta } from '@storybook/react/types-6-0'
import Card from './Card'
import GridShell from '../../common/GridShell/GridShell'

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
} as Meta

export const PopularMovies: Story = (args) => (
  <GridShell>
    <Card href={'/movies'} variant="PMovies" title="Popular Movies" {...args} />
  </GridShell>
)

export const PopularSeries: Story = (args) => (
  <GridShell>
    <Card href={'/series'} variant="PSeries" title="Popular Series" {...args} />
  </GridShell>
)

export const Item: Story = (args) => (
  <GridShell>
    <Card
      href={'/series/wolf-creek'}
      variant="Item"
      title="Wolf Creek"
      posterSource={
        'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg'
      }
      {...args}
    />
  </GridShell>
)
