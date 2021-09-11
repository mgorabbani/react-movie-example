export const filterBy = (genreId: string, year: string, list: any) => {
  const id = Number.parseInt(genreId)
  console.log(genreId, id, year)

  return list.filter(({ genre_ids, release_date }: any) => {
    return genre_ids.includes(id) && release_date.includes(year)
  })
}
