import React from 'react';

import CreateInput from './CreateInput';
import List from './List';

function App(){
  return (
    <div className="container fluid">
      <div className="row" style={{margin: 20}}>
        <div className="col-4">
          <CreateInput/>
        </div>
        <div className="col-8">
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;