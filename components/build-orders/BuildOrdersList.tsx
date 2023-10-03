import React from 'react';

function BuildOrdersList() {
  return (
    <div className="flex flex-col">
      {[1, 2, 3, 4, 5].map((num) => (
        <div>{num}</div>
      ))}
    </div>
  );
}

export default BuildOrdersList;
