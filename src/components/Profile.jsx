export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <img
        src={avatar}
        alt={username}
        className="avatar"
        width="150"
        height="150"
      />
      <div className="description">
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
