import React from 'react'
import * as S from './styles'
import { Search } from '../../icons'

const SearchBox = () => {
  return (
    <S.SearchBox>
      <S.SearchBox__Form>
        <S.SearchBox__Input placeholder="Search..." />
        <S.SearchBox__Button>
          <Search className="SearchBox__SearchIcon" />
        </S.SearchBox__Button>
      </S.SearchBox__Form>
    </S.SearchBox>
  )
}

export default SearchBox
