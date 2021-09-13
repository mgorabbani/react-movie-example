import React from 'react'
import { TextField } from '@material-ui/core'

type DropdownType = {
  setYear: React.SetStateAction<any>
  year?: string
}
const FilterYearInput: React.FC<DropdownType> = ({ setYear, year }) => (
  <TextField
    label='Filter By Year'
    value={year}
    onChange={(e) => {
      setYear(e.currentTarget.value)
    }}
  ></TextField>
)

export default FilterYearInput
