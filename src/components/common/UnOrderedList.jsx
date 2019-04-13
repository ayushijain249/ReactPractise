import React from "react";
import ListItem from "./ListItem.jsx"

const UnOrderedList = ({list}) => (
    <ul>
          {list.map((item,index) => (
            <ListItem itemValue={item} key={index} />
          ))}
    </ul>
);

export default UnOrderedList;