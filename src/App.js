import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
