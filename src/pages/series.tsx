import { useGetSeriesQuery } from '@/services/feed'
import useCollection from '@/utils/useCollection'
import useDebounce from '@/utils/useDebounce'
import useSearchFilter from '@/utils/useSearchFilter'
import { Flex, Layout, SeriesCollection } from '@common'
import { SearchBox } from '@ui'

const SeriesScreen = () => {
  const { data, isError, isLoading, isSuccess } = useGetSeriesQuery({})
  const [debouncedValue, value, setValue] = useDebounce('')
  const { collection, setCollection } = useCollection(data, isSuccess)
  useSearchFilter(data, setCollection, debouncedValue)

  return (
    <Layout title="DEMO Streaming" subTitle="Popular Series" path="/series">
      <Flex className="Flex--FilterSection">
        <SearchBox value={value} onChange={(e) => setValue(e.target.value)} />
      </Flex>
      <SeriesCollection
        collection={collection}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  )
}

export default SeriesScreen
