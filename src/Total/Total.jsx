import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { round } from '../utils'

// Создаем мемоизированный селектор
const selectTotal = createSelector(
  (state) => state.products,
  (products) => {
    const subtotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
    const tax = subtotal * 0.13
    const total = subtotal + tax

    return {
      subtotal: round(subtotal),
      tax: round(tax),
      total: round(total),
    }
  }
)

export function Total() {
  // Используем мемоизированный селектор в useSelector
  const total = useSelector(selectTotal)

  return (
    <table className="bill">
      <tbody>
        <tr className="subtotal">
          <td className="label">Subtotal :</td>
          <td className="value">$ {total.subtotal}</td>
        </tr>
        <tr className="salestax">
          <td className="label">Sales tax :</td>
          <td className="value">$ {total.tax}</td>
        </tr>
        <tr className="total">
          <td className="label">Total :</td>
          <td className="value">$ {total.total}</td>
        </tr>
      </tbody>
    </table>
  )
}
