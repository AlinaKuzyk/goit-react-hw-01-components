import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'friends.json';

export const App = () => {
  return (
    <div
   //  style={{
   //    height: '100vh',
   //    display: 'flex',
   //    justifyContent: 'center',
   //    alignItems: 'center',
   //    fontSize: 40,
   //    color: '#010101'
   //  }}
    >
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        imageUrl={user.avatar}
        stats={user.stats}
        />
        
      <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        
        <FriendList friends={friends} />;
    </div>
  );
};