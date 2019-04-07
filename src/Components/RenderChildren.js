import React, {Component, Fragment} from 'react';

export default class RenderChildren extends Component {

  state = {
    load: false
  }

  showMore = () => {
    this.setState({
      load: !this.state.load
    })
  }
  
  render() {
    const { children } = this.props;
    return ( <Fragment>{children({load: this.state.load,
                                  showMore: this.showMore})}</Fragment>);
  }
}
