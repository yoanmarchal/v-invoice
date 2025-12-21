import DateFilter from '../filters/date'
import CurrencyFilter from '../filters/euro'

export function useFilters() {
  return {
    currency: CurrencyFilter,
    date: DateFilter
  }
}
