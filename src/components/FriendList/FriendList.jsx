import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
   return (
      <ul class="friend-list">
         {friends.map(({ id, avatar, name, isOnline }) => 
            <FriendListItem id={id} avatar={avatar} name={name} status={isOnline} />)}
</ul>
   )
}

// как прописать проптайпс для массива
// FriendList.propTypes = {
//    friends: PropTypes.array
// }