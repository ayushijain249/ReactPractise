import React from "react";
import ListItem from "./ListItem.jsx"

const UnOrderedList = ({list}) => (
    <ul>
          {list.map(item => (
            <ListItem itemValue={item}/>
          ))}
    </ul>
);

export default UnOrderedList;