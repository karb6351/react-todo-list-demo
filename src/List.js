import React from 'react';
import { connect } from 'react-redux';

import * as TodoListAction from './actions/todoList/action';
import ListItem from "./ListItem";

function List({ list, changeEditStatus, editItem, changeStatus, deleteItem }){
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
            handleChangeLabel={(e, index) => editItem(index, e.target.value)}
            handleIsEditing={(index) => changeEditStatus(index)}
            handleDelete={(index) => deleteItem(index)}
            handleStatus={(index) => changeStatus(index)}
            />
          )
        )}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.todoList.list
});

const mapStateToActions = (dispatch) => ({
  changeEditStatus: (index) => dispatch(TodoListAction.changeEditStatus(index)),
  editItem: (index, label) => dispatch(TodoListAction.editItem(index, label)),
  changeStatus: (index) => dispatch(TodoListAction.changeStatus(index)),
  deleteItem: (index) => dispatch(TodoListAction.deleteItem(index))
});

export default connect(mapStateToProps, mapStateToActions)(List);