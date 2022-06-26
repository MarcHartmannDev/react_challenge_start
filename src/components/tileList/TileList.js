import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = (props) => {
  const array = props.array;

  return (
    <div>
      {array.map((item) => {
        return <Tile object={item} />;
      })}
    </div>
  );
};
