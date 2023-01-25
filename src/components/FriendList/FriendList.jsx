import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendWrapper } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
   return (
      <FriendWrapper>
         {friends.map(({ id, avatar, name, isOnline }) => 
            <FriendListItem
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline} />)}
</FriendWrapper>
   )
}

// proptypes в данном случае прописываем только для массива friends (arrayOf
// - так как будем еще проверять id) и его свойство id(так как только он используються
//  в данном файле).id входит в обьект - это будет PropTypes.shape, и  далее проверяем
//  уже его значение
FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number}))
}