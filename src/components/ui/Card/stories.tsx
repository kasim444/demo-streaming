import { Story, Meta } from '@storybook/react/types-6-0'
import Card from './Card'
import * as S from '@/components/common/Home/styles'

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
} as Meta

export const PopularMovies: Story = (args) => (
  <S.Home>
    <Card href={'/movies'} variant="PMovies" title="Popular Movies" {...args} />
  </S.Home>
)

export const PopularSeries: Story = (args) => (
  <S.Home>
    <Card href={'/series'} variant="PSeries" title="Popular Series" {...args} />
  </S.Home>
)

export const Item: Story = (args) => (
  <S.Home>
    <Card
      href={'/series/wolf-creek'}
      variant="Item"
      title="Wolf Creek"
      posterSource={
        'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg'
      }
      {...args}
    />
  </S.Home>
)
