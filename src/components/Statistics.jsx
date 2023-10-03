export const Statistics = props => {
  const listItem = props.stats.map(item => (
    <li className="item" key={item.label}>
      <span className="label-stat">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
  ));

  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>
      <ul className="stat-list">{listItem}</ul>
    </section>
  );
};
