import * as S from './styles'
import { ScrollPosition } from 'react-lazy-load-image-component'

interface BaseCardProps {
  href: string
  title: string
  scrollPosition?: ScrollPosition
}

interface ItemProps extends BaseCardProps {
  variant: 'Item'
  posterSource: string
}

interface PopularProps extends BaseCardProps {
  variant: 'PSeries' | 'PMovies'
  posterSource?: string
}

type CardProps = ItemProps | PopularProps

const Card = (props: CardProps) => {
  const { variant, href, title, posterSource, scrollPosition } = props

  return (
    <S.CardContainer href={href}>
      <S.Card>
        <S.Card__Body>
          {variant !== 'Item' && (
            <S.Card__PopularPoster>
              <h6>{variant === 'PMovies' ? 'MOVIES' : 'SERIES'}</h6>
            </S.Card__PopularPoster>
          )}
          {variant === 'Item' && (
            <S.Card__Poster
              src={posterSource}
              alt={title}
              effect="blur"
              {...(scrollPosition && { scrollPosition: scrollPosition })}
            />
          )}
        </S.Card__Body>
        <S.Card__Footer>{title}</S.Card__Footer>
      </S.Card>
    </S.CardContainer>
  )
}

export default Card
