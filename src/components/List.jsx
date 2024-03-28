import React from 'react';

function List({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <strong>{item.title}</strong> - {item.category}
        </li>
      ))}
    </ul>
  );
}

export default List;
