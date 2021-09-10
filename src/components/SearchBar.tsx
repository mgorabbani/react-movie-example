import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import DirectionsIcon from '@material-ui/icons/Directions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

type SearchBarType = {
  setSearchValue: (s: string) => void
}
const SearchBar: React.FC<SearchBarType> = ({ setSearchValue }) => {
  const [value, setValue] = useState('')
  const classes = useStyles()

  const onSubmit = (event: any) => {
    event.preventDefault()
    setSearchValue(value)
  }

  const handleSearchValueChange = (e: any) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  return (
    <Paper component='form' className={classes.root} onSubmit={onSubmit}>
      <InputBase
        className={classes.input}
        placeholder='Search Movie/TV Name'
        value={value}
        name='query'
        onChange={handleSearchValueChange}
      />
      <IconButton
        className={classes.iconButton}
        aria-label='search'
        type='submit'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
