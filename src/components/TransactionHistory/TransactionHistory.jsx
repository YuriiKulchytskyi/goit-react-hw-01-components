import { TransactionTable } from '../TransactionTable/TransactionTable';
import {
  TableHead,
  TableDataHistory,
  TableRowHistory,
} from './TransactionHistory.style';
export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <TableHead>
        <TableRowHistory>
          <TableDataHistory>Type</TableDataHistory>
          <TableDataHistory>Amount</TableDataHistory>
          <TableDataHistory>Currency</TableDataHistory>
        </TableRowHistory>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionTable
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
