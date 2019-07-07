import React from 'react';
import { connect } from "react-redux";

import * as TodoListAction from './actions/todoList/action';

function CreateInput({ createLabel, editCreateLabel, resetCreateLabel,addItem }) {

  function create(){
    addItem();
    resetCreateLabel();
  }

  return (
    <div className="card">
      <div className="card-header">
        Create Label Form
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="label">Task Label</label>
          <input type="text" name="label" className="form-control" value={createLabel} onChange={(e) => editCreateLabel(e.target.value)} />
        </div>
        <button className="btn btn-success btn-block" onClick={create}>Create</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  createLabel: state.todoList.createLabel
});

const mapStateToActions = (dispatch) => ({
  addItem: label => dispatch(TodoListAction.addItem(label)),
  editCreateLabel: label => dispatch(TodoListAction.editCreateLabel(label)),
  resetCreateLabel: () => dispatch(TodoListAction.resetCreateLabel())
});

export default connect(mapStateToProps, mapStateToActions)(CreateInput);