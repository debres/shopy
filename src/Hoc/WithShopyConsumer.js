import React from 'react';
import { ShopyConsumer } from '../Services/ContextService';

function WithShopyConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ShopyConsumer>
        {value => <Component {...props} context={value} />}
      </ShopyConsumer>
    );
  };
}

export default WithShopyConsumer;