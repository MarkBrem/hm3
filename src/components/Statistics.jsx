import React from 'react';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats &&
          stats.map((item, index) => (
            <li className="item" key={index}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Statistics;
