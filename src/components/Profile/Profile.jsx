import PropTypes from 'prop-types';
import { Card,Image, DescriptionText,Menu,MenuItem} from 'components/Profile/Profile.styled'

export const Profile = ({ name,
  tag,
  location,
  imageUrl,
  stats,
}) => {
   const userStats = [{
      title: 'Followers',
      quantity: stats.followers
   },
   {
      title: 'Views',
      quantity: stats.views
      },
   {
      title: 'Likes',
      quantity: stats.likes
   }]
  return (
    <Card>
      <div className="description">
        <Image src={imageUrl} alt="User avatar" className="avatar" />
        <DescriptionText className="name">{name}</DescriptionText>
        <DescriptionText className="tag">@{tag}</DescriptionText>
        <DescriptionText className="location">{location}</DescriptionText>
      </div>

        <Menu>
           {userStats.map(({title, quantity})=>
              
           <MenuItem key={title}>
              <span className="label">{ title}</span>
          <span className="quantity">{quantity}</span>
        </MenuItem>)}
         
      </Menu>
    </Card>
  );
}

Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
};
