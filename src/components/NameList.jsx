import React from 'react';

const NameList = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  return (
    <div>
      <h2>Список имен:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
