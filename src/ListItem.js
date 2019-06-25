import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    const { label, done, isEditing } = this.props.item;
    const { handleChangeLabel, handleIsEditing, handleDelete, handleStatus, index } = this.props;
    return (
      <tr>
        <td style={{verticalAlign: 'middle'}}>
          <div className="form-group">
            <input type="text" readOnly={!isEditing} className={`form-control${ !isEditing ? '-plaintext' : '' }`} value={label} onChange={(e) => handleChangeLabel(e, index)} />
          </div>
        </td>
        <td style={{verticalAlign: 'middle'}}><span className={`badge badge-pill badge-${done ? 'success' : 'secondary'}`}>{done ? 'Finish' : 'Not Finish'}</span></td>
        <td style={{verticalAlign: 'middle'}}>
          <button onClick={() => handleIsEditing(index)} style={{marginRight: 5}} className="btn btn-outline-info">Edit</button>
          <button onClick={() => handleStatus(index)} style={{marginRight: 5}} className={`btn btn-outline-${done ? 'primary' : 'secondary'}`}>{done ? 'Mark as unfinished' : 'Mark as done' }</button>
          <button onClick={() => handleDelete(index)} className="btn btn-outline-danger">delete</button>
        </td>
      </tr>
    );
  }
}

export default ListItem;