import React from 'react';
import ListItem from "./ListItem";

function List({ handleChangeLabel, handleIsEditing, handleDelete, handleStatus, list }){
  return (
    <div className="card">
      <div className="card-header">
        Todo List
      </div>
      <table className="table">
        <thead>
        <tr>
          <th>Label</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {list.map((item, index) => (
          <ListItem
            index={index} key={index} item={item}
            handleChangeLabel={(e, index) => handleChangeLabel(e, index)}
            handleIsEditing={(index) => handleIsEditing(index)}
            handleDelete={(index) => handleDelete(index)}
            handleStatus={(index) => handleStatus(index)}
          />)
        )}
        </tbody>
      </table>
    </div>
  );
}

export default List;