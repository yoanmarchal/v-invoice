const defaultFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export default (value, { locale = 'fr-FR', currency = 'EUR', options = {} } = {}) => {
  const amount = Number(value)

  if (!Number.isFinite(amount)) return ''

  const formatter = locale === 'fr-FR' && currency === 'EUR' && Object.keys(options).length === 0
    ? defaultFormatter
    : new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options
    })

  return formatter.format(amount)
}
