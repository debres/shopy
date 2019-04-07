import React from 'react';
import styled from 'styled-components';

import thumbnail from '../Img/Product_Im.png';

const Product = styled.article`
  position: relative;
  width: 270px;
  height: 365px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImg = styled.figcaption`
  margin: 30px auto;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
`;

const Price = styled.p`
  margin-bottom: 30px;
  color: #ff5912;
  font-size: 18px;
  font-weight: 700;
  align-self: center;
`;

const Hover = styled.section`
  position: absolute;
  visibility: hidden;
  margin-top: 195px;
  margin-bottom: 30px;
  width: 140px;
  min-height: 140px;
`;

const Variations = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
`;

const ProductBtns = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IcoBtn = styled.button`
  border: 0;
  cursor: pointer;
  background-color: #fff;
`;

const singleProduct = () => {
  return (<Product>
              <ProductImg>
                <Image src={thumbnail} alt="randomProductsThumbnail" />
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
          </Product>);
}

export default singleProduct;
