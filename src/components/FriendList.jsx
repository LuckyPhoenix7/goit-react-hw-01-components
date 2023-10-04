export const FriendList = props => {
  return (
    <div class="friend-container">
      <ul class="friend-list">
        {props.friends.map(({ id, isOnline, avatar, name }) => (
          <li class="friend-item" key={id}>
            <span
              class="friend-status"
              style={{
                background: isOnline === true ? 'green' : 'red',
              }}
            ></span>
            <img class="friend-avatar" src={avatar} alt={name} width="48" />
            <p class="friend-name">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
