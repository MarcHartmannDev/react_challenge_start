import React from "react";

export const Tile = (props) => {
  const object = props.object;
  const items = Object.values(object);

  console.log(items);

  return (
    <div className="tile-container">
      {items.map((item, index) => {
        if (index === 0) {
          return <p className="tile-title">{item}</p>;
        } else {
          return <p className="tile">{item}</p>;
        }
      })}
    </div>
  );
};
