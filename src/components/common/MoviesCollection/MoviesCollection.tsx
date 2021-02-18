import { useGetFeedsQuery } from '@/src/services/feed'
import { GridShell } from '@common'
import { FeedType } from '@interfaces'
import { Card } from '@ui'
import {
  ScrollPosition,
  trackWindowScroll,
} from 'react-lazy-load-image-component'
import { CommonText } from './styles'

interface MoviesCollectionProps {
  scrollPosition: ScrollPosition
}

const MoviesCollection = ({ scrollPosition }: MoviesCollectionProps) => {
  const { data, isError, isLoading } = useGetFeedsQuery('')

  if (isError) {
    return (
      <GridShell>
        <CommonText>Oops, something went wrong...</CommonText>
      </GridShell>
    )
  }

  if (isLoading) {
    return (
      <GridShell>
        <CommonText>Loading...</CommonText>
      </GridShell>
    )
  }

  return (
    <GridShell>
      {data?.entries.map((s: FeedType, i: number) => (
        <Card
          key={i.toString()}
          href={encodeURI(`/series/${s.title.toLowerCase()}`)}
          variant="Item"
          title={s.title}
          posterSource={s.images['Poster Art'].url}
          scrollPosition={scrollPosition}
        />
      ))}
    </GridShell>
  )
}

export default trackWindowScroll(MoviesCollection)
