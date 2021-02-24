import { Meta, Story } from '@storybook/react/types-6-0'
import Dropdown from './Dropdown'
import useSelectedOption from '../../../utils/useSelectedOption'
import SORT_OPTIONS from '../../../utils/sort-options'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta

const DropdownWrapper = () => {
  const { selectedOption, setSelectedOption } = useSelectedOption()

  return (
    <Dropdown
      options={SORT_OPTIONS}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  )
}

export const Basic: Story = () => {
  return <DropdownWrapper />
}
