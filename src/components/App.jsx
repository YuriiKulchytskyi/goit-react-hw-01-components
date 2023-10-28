import { Profile } from './Profile/Profile';
import user from '../../src/dataFolder/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../../src/dataFolder/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../../src/dataFolder/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../../src/dataFolder/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
