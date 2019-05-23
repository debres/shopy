import React from 'react';
import styled from 'styled-components';

function BestSalesList ({ className, children, bestSalesList }) {
  return (
    <div className={className}>
      {bestSalesList  !== null
                      ? bestSalesList.map((propduct) => {
                        return (
                          <section className={className} key={propduct.id}>
                            <figcaption>
                                <img src={propduct.image} alt="randomProductsThambnails" />
                            </figcaption>
                            <div>
                              <h3>{propduct.title}</h3>
                              <p>${propduct.price}</p>
                              {children}
                            </div>
                          </section>
                          )
                        })
                      : <p>There is nothing to sell this week...</p>}
    </div>
  );
}

const StyledBestSalesList = styled(BestSalesList)`
  margin-bottom: 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  section {
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
    figcaption {
      img {

      }
    }
    div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        margin-bottom: 30px;
      }
      p {

      }
    }
  }
  p {
    text-align: center;
  }
`;

export default StyledBestSalesList;
