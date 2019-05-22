import React, { Component } from 'react';
import styled from 'styled-components';

const ProductPreview = styled.section`
  background-color: #fff;
`;

const DecorContainer = styled.div`
  padding-top: 80px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-around;
`;

class ProductsShow extends Component {
  render() {
    return (
      <ProductPreview className="productShow">
        <DecorContainer>
          <div>galery</div>
          <article className="productContainer">
            <section className="productDescription">
              <hgroup>
              <h1 className="productTitleMain">full winter kit</h1>
              <h2 className="titleDescription">half jacket + skiny trousers + boot leather</h2>
              </hgroup>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </section>
            <section className="productDitails">
            </section>
            <section className="productOrder">
            </section>
          </article>
        </DecorContainer>
      </ProductPreview>
    )
  }
}

export default ProductsShow;
