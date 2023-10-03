export const FriendList = props => {
  const listItem = props.friends.map(item => (
    <li class="friend-item">
      <span
        class="friend-status"
        style={{
          background: item.isOnline === true ? 'green' : 'red',
        }}
      ></span>
      <img class="friend-avatar" src={item.avatar} alt={item.name} width="48" />
      <p class="friend-name">{item.name}</p>
    </li>
  ));

  return (
    <div class="friend-container">
      <ul class="friend-list">{listItem}</ul>
    </div>
  );
};
