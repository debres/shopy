import React from 'react';
import styled from 'styled-components';

import image from '../Img/Product_Img.png';
import addToCart from '../Img/addToCart.ico';

const BestProduct = styled.article`
  width: 370px;
  min-height: 160px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProductInfo = styled.section`
  position: relative;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const DecorContaoner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.p`

`;

const CartBtn = styled.button`
  position: absolute;
  visibility: hidden;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

const bestProduct = good => {
  return (
    <BestProduct>
        <figcaption>
            <img src={image} alt="randomProductsThambnails" />
        </figcaption>
        <ProductInfo>
          <Title>Reebok Track Jacket</Title>
          <DecorContaoner>
            <span>raiting</span>
            <Price>$100</Price>
            <CartBtn onClick={()=>{}}>
              <img src={addToCart} alt="add to cart" />
              <span className="icoBtn"></span>
              add to card
            </CartBtn>
          </DecorContaoner>
        </ProductInfo>
    </BestProduct>
  );
}

export default bestProduct;
