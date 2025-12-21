const defaultLocale = 'fr-FR'
const defaultOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC'
}

export default (value, { locale = defaultLocale, options = {} } = {}) => {
  if (!value) return ''

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''

  const formatOptions = { ...defaultOptions, ...options }

  return date.toLocaleString(locale, formatOptions)
}
