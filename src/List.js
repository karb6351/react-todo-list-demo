import React, {Component} from 'react';
import ListItem from "./ListItem";

class List extends Component {
  render() {
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
          {this.props.list.map((item, index) => (
            <ListItem
              index={index} key={index} item={item}
              handleChangeLabel={(e, index) => this.props.handleChangeLabel(e, index)}
              handleIsEditing={(index) => this.props.handleIsEditing(index)}
              handleDelete={(index) => this.props.handleDelete(index)}
              handleStatus={(index) => this.props.handleStatus(index)}
            />)
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;