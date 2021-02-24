import { SortOptionProps } from '@interfaces'
import { useState } from 'react'

const useSelectedOption = () => {
  const [selectedOption, setSelectedOption] = useState<SortOptionProps | null>(
    null
  )

  return {
    selectedOption,
    setSelectedOption,
  }
}

export default useSelectedOption
