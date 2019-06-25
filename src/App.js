import React, {Component} from 'react';

import CreateInput from './CreateInput';
import List from './List';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  create(label){
    this.setState({
      ...this.state,
      list: [...this.state.list, { done: false, isEditing: false, label }]
    });
  }

  changeLabel(e, index){
    let newList = this.state.list;
    newList[index].label = e.target.value;
    this.setState({
      ...this.state,
      list: newList
    });
  }

  updateIsEditing(index){
    let newList = this.state.list;
    newList[index].isEditing = !newList[index].isEditing;
    this.setState({
      ...this.state,
      list: newList
    });
  }

  delete(index){
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      ...this.state,
      list: newList
    });
  }

  updateStatus(index){
    let newList = this.state.list;
    newList[index].done = !newList[index].done;
    this.setState({
      ...this.state,
      list: newList
    });
  }

  render() {
    return (
      <div className="container fluid">
        <div className="row" style={{margin: 20}}>
          <div className="col-4">
            <CreateInput handleOnClick={label => this.create(label)} />
          </div>
          <div className="col-8">
            <List list={this.state.list}
                  handleChangeLabel={(e, index) => this.changeLabel(e, index)}
                  handleIsEditing={(index) => this.updateIsEditing(index)}
                  handleDelete={(index) => this.delete(index)}
                  handleStatus={(index => this.updateStatus(index))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;