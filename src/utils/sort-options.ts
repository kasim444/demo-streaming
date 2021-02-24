import { SortOptionProps } from '@interfaces'

const SORT_OPTIONS: SortOptionProps[] = [
  {
    value: 'yearDecr',
    label: 'Sort by Year: Descending',
  },
  {
    value: 'yearInc',
    label: 'Sort by Year: Ascending',
  },
  {
    value: 'titleAZ',
    label: 'Sort by Title: A-Z',
  },
  {
    value: 'titleZA',
    label: 'Sort by Title: Z-A',
  },
]

export default SORT_OPTIONS
