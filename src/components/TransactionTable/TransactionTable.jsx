import { TableRow, TableData } from './TransactionTable.style';

export const TransactionTable = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};
