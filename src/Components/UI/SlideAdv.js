import React from 'react';

function SlideAdv({ className }) {
    return (<section className={className}>
              <article>
                <hgroup>
                  <h1>full winter kit</h1>
                  <h2>half jacket + skiny trousers + boot leather</h2>
                </hgroup>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                <div>
                  <p>Price: 120$</p>
                  <div>
                    <p>order now</p>
                  </div>
                </div>
              </article>
            </section>);
          }

const StyledSlideAdv = styled(SlideAdv)`

`;

export default StyledSlideAdv;
