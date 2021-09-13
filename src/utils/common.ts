export const filterBy = (genreId: string, year: string, list: any) => {
  const id = genreId ? Number.parseInt(genreId) : ''
  return list.filter(({ genre_ids, release_date }: any) => {
    if (!id) {
      return release_date.includes(year)
    }
    return genre_ids.includes(id) && release_date.includes(year)
  })
}

export const sortByName = (list: any) => {
  return list.sort((a: any, b: any) => {
    const nameA = a.original_title.toUpperCase()
    const nameB = b.original_title.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

export const sortbyYear = (list: any) => {
  return list.sort((a: any, b: any) => {
    return +new Date(b.release_date) - +new Date(a.release_date)
  })
}
