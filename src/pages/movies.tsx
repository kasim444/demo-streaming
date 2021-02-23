import { useGetMoviesQuery } from '@/services/feed'
import useCollection from '@/utils/useCollection'
import useDebounce from '@/utils/useDebounce'
import useSearchFilter from '@/utils/useSearchFilter'
import { Flex, Layout, MoviesCollection } from '@common'
import { SearchBox } from '@ui'

const MoviesScreen = () => {
  const { data, isError, isLoading, isSuccess } = useGetMoviesQuery({})
  const [debouncedValue, value, setValue] = useDebounce('')
  const { collection, setCollection } = useCollection(data, isSuccess)
  useSearchFilter(data, setCollection, debouncedValue)

  return (
    <Layout title="DEMO Streaming" subTitle="Popular Movies" path="/movies">
      <Flex className="Flex--FilterSection">
        <SearchBox value={value} onChange={(e) => setValue(e.target.value)} />
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
