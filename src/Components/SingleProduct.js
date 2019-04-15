import React from 'react';
import styled from 'styled-components';

import thumbnail from '../Img/Product_Im.png';

const Product = styled.article`
  position: relative;
  width: 270px;
  height: 365px;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font: normal normal 700 18px 'Roboto', sans-serif;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  > h4 {
    margin-bottom: inherit;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImg = styled.figcaption`
  margin: 30px auto;
  > img {
    display: block;
    max-width: 100%;
    width: 100%;
    ${Product}:hover & {
      max-width: 50%;
      margin: 0 auto;
    }
  }
`;

const Title = styled.h4`
  margin-bottom: inherit;
`;

const Price = styled.span`
  margin-bottom: inherit;
  color: #ff5912;
  ${Product}:hover & {
    visibility: hidden;
  }
`;

const Hover = styled.section`
  position: absolute;
  visibility: hidden;
  margin-top: 195px;
  margin-bottom: inherit;
  ${Product}:hover & {
    visibility: visible;
  }
`;

const Variations = styled.div`
  margin-bottom: inherit;
  border-bottom: 1px solid black;
  > p {
    margin-bottom: inherit;
    font: normal normal 400 14px 'Roboto', sans-serif;
    text-align: center;
  }
`;

const ProductBtns = styled.div`
  margin-top: 30px;
  margin-bottom: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IcoBtn = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const singleProduct = () => {
  return (
    <Product>
      <ProductImg>
        <img src={thumbnail} alt="randomProductsThumbnail" />
      </ProductImg>
        <Title>Reebok Track Jacket</Title>
        <Price>$100</Price>
      <Hover>
        <Variations>
          <p>sizes: s - m - l - xl</p>
          <p>colors</p>
        </Variations>
        <ProductBtns>
          <IcoBtn onClick={()=>{}}>
            <span className="icoBtnIdicator"></span>
            share
          </IcoBtn>
          <IcoBtn onClick={()=>{}}>
            <span className="icoBtnIdicator"></span>
            addToCard
          </IcoBtn>
          <IcoBtn onClick={()=>{}}>
            <span className="icoBtnIdicator"></span>
            like
          </IcoBtn>
        </ProductBtns>
      </Hover>
    </Product>
  );
}

export default singleProduct;
