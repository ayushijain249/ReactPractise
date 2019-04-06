import React from "react";
import ListItem from "./ListItem.jsx"

const OrderedList = ({list}) => (
    <ol>
          {list.map(item => (
            <ListItem itemValue={item}/>
          ))}
    </ol>
);

export default OrderedList;
