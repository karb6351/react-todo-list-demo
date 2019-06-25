import React, {Component} from 'react';

class CreateInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      label: ''
    };
  }

  updateLabel(event) {
    this.setState({
      ...this.state,
      label: event.target.value
    });
  }

  create(){
    this.props.handleOnClick(this.state.label);
    this.setState({
      ...this.state,
      label: ''
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Create Label Form
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="label">Task Label</label>
            <input type="text" name="label" className="form-control" value={this.state.label} onChange={(e) => this.updateLabel(e)} />
          </div>
          <button className="btn btn-success btn-block" onClick={() => this.create()}>Create</button>
        </div>
      </div>
    );
  }
}

export default CreateInput;