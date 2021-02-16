import { Link } from '@ui'
import * as S from './styles'

interface ItemProps {
  variant: 'Item'
  href: string
  title: string
  posterSource: string
}

interface PopularProps {
  variant: 'PSeries' | 'PMovies'
  href: string
  title: string
  posterSource?: string
}

type CardProps = ItemProps | PopularProps

const Card = (props: CardProps) => {
  const { variant, href, title, posterSource } = props

  return (
    <Link href={href}>
      <S.Card>
        <S.Card__Body>
          {variant !== 'Item' && (
            <S.Card__PopularPoster>
              <h6>{variant === 'PMovies' ? 'MOVIES' : 'SERIES'}</h6>
            </S.Card__PopularPoster>
          )}
          {variant === 'Item' && <S.Card__Poster src={posterSource} />}
        </S.Card__Body>
        <S.Card__Footer>{title}</S.Card__Footer>
      </S.Card>
    </Link>
  )
}

export default Card
