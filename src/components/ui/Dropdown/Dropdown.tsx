import { SortOptionProps } from '@interfaces'
import cx from 'classnames'
import { Dispatch, SetStateAction, useState } from 'react'
import { ArrowDown } from '../../icons'
import * as S from './styles'

interface DropdownProps {
  options: SortOptionProps[]
  selectedOption: SortOptionProps | null
  setSelectedOption: Dispatch<SetStateAction<SortOptionProps | null>>
}

const Dropdown = ({
  options,
  selectedOption,
  setSelectedOption,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: SortOptionProps) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <S.DropDownContainer>
      <S.DropDownHeader
        onClick={toggling}
        className={cx({
          'DropDownHeader--selected': selectedOption,
          'DropDownHeader--focused': isOpen,
        })}
      >
        <span>{selectedOption?.label || 'Sort by'}</span>
        <ArrowDown />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          <S.DropDownList>
            {options.map((option) => (
              <S.ListItem
                onClick={() => onOptionClicked(option)}
                key={option.value}
              >
                {option.label}
              </S.ListItem>
            ))}
          </S.DropDownList>
        </S.DropDownListContainer>
      )}
    </S.DropDownContainer>
  )
}

export default Dropdown
