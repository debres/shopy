import React, { Component } from 'react';
import products from '../data';

const ShopyContext = React.createContext();

export default class ShopyProvider extends Component {
  state = {
      goodsList: null,
      newArrivalsList: null,
      bestSalesList: null,
      relatedProductList: null,
      id: null,
      title: null,
      brand: null,
      price: null,
      size: null,
      colors: null,
      category_id: null,
      description:null,
      images: null
  }

  /*getData = async () => {

  }*/

  componentDidMount() {
     const goodsList = this.dataFormat(products);
     const newArrivalsList = goodsList.filter(good => good.new === true);
     const bestSalesList = goodsList.filter(good => good.bestSale === true);
     this.setState({
        goodsList: goodsList,
        newArrivalsList: newArrivalsList,
        bestSalesList: bestSalesList
      })
  }

  dataFormat(products) {
    const formatedData = products.map((product) => {
      const id = product.sys.id;
      const images = product.fields.images.map((image) => {
        return image.fields.file.url
      });
      const goods = {...product.fields, id, images }
      return goods
    })
    return formatedData
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
