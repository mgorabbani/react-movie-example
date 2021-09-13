import React, { useEffect, useState } from 'react'
import { Container, Grid, makeStyles, Select } from '@material-ui/core'

import MovieItem from '../components/MovieItem'
import SearchBar from '../components/SearchBar'
import Api from '../utils/api'
import Dropdown from '../components/FilterDropdown'
import FilterYearInput from '../components/FilterYearInput'
import { filterBy, sortByName, sortbyYear } from '../utils/common'
import Sort from '../components/Sort'

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(4, 0),
  },
  filter: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}))

function HomePage() {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')
  const [genreId, setGenreId] = useState('')
  const [year, setYear] = useState('')
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const [sort, setSort] = React.useState('')

  useEffect(() => {
    if (searchValue) {
      Api.get('/search/movie', { params: { query: searchValue } }).then((r) => {
        setList(r.data.results)
        setFilteredList(r.data.results)
      })
    }
  }, [searchValue])

  useEffect(() => {
    if (year || genreId) {
      const newList = filterBy(genreId, year, list)
      setFilteredList(newList)
    } else {
      setFilteredList(list)
    }
  }, [genreId, year])

  useEffect(() => {
    if (sort === 'name') {
      const sortedList: [] = sortByName(filteredList) || []
      setFilteredList([...sortedList])
    }

    if (sort === 'year') {
      const sortedList: [] = sortbyYear(filteredList) || []
      setFilteredList([...sortedList])
    }
  }, [sort])

  return (
    <Container>
      <Grid container justifyContent='space-between' className={classes.header}>
        <Grid item md={4}>
          <SearchBar setSearchValue={setSearchValue} />
        </Grid>
        <Grid item md={3}>
          <div className={classes.filter}>
            <Dropdown setGenreId={setGenreId} genreId={genreId} />
            <FilterYearInput setYear={setYear} year={year} />
          </div>
          <Sort sort={sort} setSort={setSort} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredList?.map(
          ({ id, original_title, genre_ids, poster_path, release_date }) => {
            return (
              <Grid item xs={3} key={id}>
                <MovieItem
                  {...{
                    id,
                    original_title,
                    genre_ids,
                    poster_path,
                    release_date,
                  }}
                />
              </Grid>
            )
          },
        )}
      </Grid>
    </Container>
  )
}

export default HomePage
