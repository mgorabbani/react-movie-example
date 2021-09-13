import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)

type SortType = {
  setSort: (s: string) => void
  sort: string
}

const Sort: React.FC<SortType> = ({ setSort, sort }) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSort(event.target.value as string)
  }
  return (
    <FormControl variant='filled' className={classes.formControl}>
      <InputLabel id='demo-simple-select-filled-label'>Sort By</InputLabel>
      <Select
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        value={sort}
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value='year'>Year</MenuItem>
        <MenuItem value='name'>Name</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Sort
