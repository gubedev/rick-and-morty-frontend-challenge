export function dateToStringESFormatted(date) {
  if (date === undefined || date === null) {
    date = new Date()
  }

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let stringDate = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`

  return stringDate
}
