import { GridShell } from '@common'
import { FeedsType, FeedType } from '@interfaces'
import { Card } from '@ui'
import {
  ScrollPosition,
  trackWindowScroll,
} from 'react-lazy-load-image-component'
import { CommonText } from './styles'

interface MoviesCollectionProps {
  scrollPosition: ScrollPosition
  collection: FeedsType | undefined
  isError: boolean
  isLoading: boolean
}

const MoviesCollection = ({
  scrollPosition,
  collection,
  isError,
  isLoading,
}: MoviesCollectionProps) => {
  if (isError) {
    return (
      <GridShell>
        <CommonText>Oops, something went wrong...</CommonText>
      </GridShell>
    )
  }

  if (isLoading || !collection) {
    return (
      <GridShell>
        <CommonText>Loading...</CommonText>
      </GridShell>
    )
  }

  return (
    <GridShell>
      {collection.entries.slice(0, 21).map((s: FeedType, i: number) => (
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
