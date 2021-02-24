import { useGetSeriesQuery } from '@/services/feed'
import SORT_OPTIONS from '@/utils/sort-options'
import useCollection from '@/utils/useCollection'
import useDebounce from '@/utils/useDebounce'
import useSearchFilter from '@/utils/useSearchFilter'
import useSelectedOption from '@/utils/useSelectedOption'
import useSortCollection from '@/utils/useSortCollection'
import { Flex, Layout, SeriesCollection } from '@common'
import { Dropdown, SearchBox } from '@ui'

const SeriesScreen = () => {
  const { data, isError, isLoading, isSuccess } = useGetSeriesQuery({})
  const { selectedOption, setSelectedOption } = useSelectedOption()

  // side effects
  const { collection, setCollection } = useCollection(data, isSuccess)
  const [debouncedValue, value, setValue] = useDebounce('')
  useSearchFilter(data, setCollection, debouncedValue)
  useSortCollection(data, setCollection, selectedOption?.value)

  return (
    <Layout title="DEMO Streaming" subTitle="Popular Series" path="/series">
      <Flex className="Flex--FilterSection" justify="space-between">
        <SearchBox value={value} onChange={(e) => setValue(e.target.value)} />
        <Dropdown
          options={SORT_OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
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
