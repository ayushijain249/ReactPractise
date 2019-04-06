import React from "react";

const ListItem = ({itemValue}) => (
    <li key={itemValue}>{itemValue}</li>
);

export default ListItem;