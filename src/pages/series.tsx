import { useGetFeedsQuery } from '@/services/feed'
import useDebounce from '@/utils/useDebounce'
import { Flex, Layout, SeriesCollection } from '@common'
import { SearchBox } from '@ui'
import { useEffect } from 'react'

const SeriesScreen = () => {
  const { data, isError, isLoading } = useGetFeedsQuery({})
  const [debouncedValue, value, setValue] = useDebounce('')

  useEffect(() => {
    console.log({ debouncedValue })
  }, [debouncedValue])

  return (
    <Layout title="DEMO Streaming" subTitle="Popular Series" path="/series">
      <Flex className="Flex--FilterSection">
        <SearchBox value={value} onChange={(e) => setValue(e.target.value)} />
      </Flex>
      <SeriesCollection
        collection={data}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  )
}

export default SeriesScreen
