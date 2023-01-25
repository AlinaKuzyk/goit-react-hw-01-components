import PropTypes from 'prop-types';
import {TableContainer, TableHead,TableBody} from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  // console.log(items)
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
           <tr key={id }>
              <td>{ type}</td>
              <td>{ amount}</td>
              <td>{currency }</td>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
   id: PropTypes.string,
   type: PropTypes.string,
   amount: PropTypes.string,
   currency: PropTypes.string
}
