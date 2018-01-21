import React from 'react';
import Shoot from './shoot_objects';


class simpleComponent extends React.Component {
  render () {
    return (
      <div>
        <h5>simple component</h5>
        <Shoot shootId="20171201_001_Test_Test" />
      </div>

    );
  }
}

export default simpleComponent
