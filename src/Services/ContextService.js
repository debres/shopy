import React, { Component } from 'react';
import products from '../data';

const ShopyContext = React.createContext();

export default class ShopyProvider extends Component {
    state = {
        contacts: null,
        socials: null,
        goods: [],
        newArrivals: [],
        bestSales: []
        
    }

    getData = async () => {

    }

    comsponentsDidMount() {
       // const contacts = this.dataFormat(products);
    }

    dataFormat(items) {
    
    }

    render() {
        return (
            <ShopyContext.Provider  value={{...this.state}}>
                {this.props.children}
            </ShopyContext.Provider>
        )
    }
}

const ShopyConsumer = ShopyContext.Consumer;

export { ShopyProvider, ShopyConsumer, ShopyContext };