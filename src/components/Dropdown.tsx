import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { TextField } from '@material-ui/core'
import { genres } from '../utils/getGenreNameFromId'

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  console.log(Object.entries(genres))

  return (
    <div>
      <TextField
        id='filled-select-currency-native'
        select
        label='Filter By Genre'
        value={10}
        onChange={() => {}}
        SelectProps={{
          native: true,
        }}
      >
        {Object.entries(genres).map((genre: any) => (
          <option key={genre[0]} value={genre[1]}>
            {genre[1]}
          </option>
        ))}
      </TextField>
    </div>
  )
}

export default Dropdown
