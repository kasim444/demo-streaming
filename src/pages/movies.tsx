import { useGetMoviesQuery } from '@/services/feed'
import useCollection from '@/utils/useCollection'
import useDebounce from '@/utils/useDebounce'
import useSearchFilter from '@/utils/useSearchFilter'
import { Flex, Layout, MoviesCollection } from '@common'
import { Dropdown, SearchBox } from '@ui'
import SORT_OPTIONS from '@/utils/sort-options'
import useSelectedOption from '@/src/utils/useSelectedOption'
import useSortCollection from '@/utils/useSortCollection'

const MoviesScreen = () => {
  const { data, isError, isLoading, isSuccess } = useGetMoviesQuery({})
  const { selectedOption, setSelectedOption } = useSelectedOption()

  // side effects
  const { collection, setCollection } = useCollection(data, isSuccess)
  const [debouncedValue, value, setValue] = useDebounce('')
  useSearchFilter(data, setCollection, debouncedValue)
  useSortCollection(data, setCollection, selectedOption?.value)

  return (
    <Layout title="DEMO Streaming" subTitle="Popular Movies" path="/movies">
      <Flex className="Flex--FilterSection" justify="space-between">
        <SearchBox value={value} onChange={(e) => setValue(e.target.value)} />
        <Dropdown
          options={SORT_OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Flex>
      <MoviesCollection
        collection={collection}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  )
}

export default MoviesScreen
