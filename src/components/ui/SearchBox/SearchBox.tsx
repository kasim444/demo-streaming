import React from 'react'
import * as S from './styles'
import { Search } from '../../icons'

interface SearchBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  value?: string
}

const SearchBox = ({ onChange, onClick, value, ...rest }: SearchBoxProps) => {
  return (
    <S.SearchBox>
      <S.SearchBox__Form onSubmit={(e) => e.preventDefault()}>
        <S.SearchBox__Input
          placeholder="Search..."
          value={value}
          onChange={onChange}
          {...rest}
        />
        <S.SearchBox__Button onClick={onClick}>
          <Search className="SearchBox__SearchIcon" />
        </S.SearchBox__Button>
      </S.SearchBox__Form>
    </S.SearchBox>
  )
}

export default SearchBox
