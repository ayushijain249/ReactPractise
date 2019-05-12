import React from "react";
import ListItem from "./ListItem.jsx"

const OrderedList = ({list}) => (
    <ol>
          {list.map((item,index) => (
            <ListItem itemValue={item} key={index}/>
          ))}
    </ol>
);

export default OrderedList;
