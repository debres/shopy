import React, { Component, Fragment } from 'react';

const withData = (WrapedBlock) => {
 return class extends Component {

   componentWillMount() {
     
   }

    render() {
      return <section>
                  {!isReady
                    ?
                    : goods.map((good, i) => <WrapedBlock key={i} {...good} />)}
              </section>
    }
  }
}

export default withData;
