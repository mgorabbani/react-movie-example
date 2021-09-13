import React from 'react'
import { TextField } from '@material-ui/core'
import { genres } from '../utils/getGenreNameFromId'

type DropdownType = {
  setGenreId: React.SetStateAction<any>
  genreId?: string
}
const Dropdown: React.FC<DropdownType> = ({ setGenreId, genreId }) => (
  <TextField
    select
    value={genreId}
    onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
      setGenreId(e.currentTarget.value)
    }}
    SelectProps={{
      native: true,
    }}
  >
    <option key={''} value={''}>
      All Genre
    </option>
    {Object.entries(genres).map((genre: any) => (
      <option key={genre[0]} value={genre[0]}>
        {genre[1]}
      </option>
    ))}
  </TextField>
)

export default Dropdown
