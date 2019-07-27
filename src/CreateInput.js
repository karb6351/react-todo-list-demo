import React from 'react';
import { connect } from "react-redux";

import * as TodoListAction from './actions/todoList/action';
import {Link} from "react-router-dom";

function CreateInput({ createLabel, editCreateLabel, resetCreateLabel,addItem, history }) {

  function create(){
    addItem();
    resetCreateLabel();
    history.push('/');
  }

  return (
    <React.Fragment>
      <Link to={'/'} className="btn btn-secondary btn-small" >Back</Link>
      <div className="card" style={{marginTop: 20}}>
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
    </React.Fragment>
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