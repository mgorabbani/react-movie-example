import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Search } from '@material-ui/icons'

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
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
