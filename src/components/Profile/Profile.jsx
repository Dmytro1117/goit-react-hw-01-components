import PropTypes from 'prop-types';
import { ContainerProfile, ContainerDescription, ImgAvatar, ParName, ParTag, ParLocation, UlStats, LiStats, SpanLabel, SpanQuantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerProfile>
      <ContainerDescription>
        <ImgAvatar src={avatar} alt={username} />
        <ParName>{username}</ParName>
        <ParTag>@{tag}</ParTag>
        <ParLocation>{location}</ParLocation>
     </ContainerDescription>

      <UlStats>
        <LiStats>
          <SpanLabel >Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </LiStats>
        <LiStats>
          <SpanLabel >Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </LiStats>
        <LiStats>
          <SpanLabel >Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </LiStats>
      </UlStats>
    </ContainerProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
