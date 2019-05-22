import React from 'react';
import styled from 'styled-components';

function BestProduct ({ className, children, bestSales }) {
  return (
    <>
      {bestSales  !== null
                  ? bestSales.map((propduct) => {
                    return (
                      <article className={className} key={propduct.id}>
                        <figcaption>
                            <img src={propduct.image} alt="randomProductsThambnails" />
                        </figcaption>
                        <section>
                          <h3>{propduct.title}</h3>
                          <p>${propduct.price}</p>
                          {children}
                        </section>
                      </article>
                      )
                    })
                  : <p>spiner...</p>}
    </>
  );
}

const StyledbestProduct = styled(BestProduct)`
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
  section {
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
`;

export default StyledbestProduct;