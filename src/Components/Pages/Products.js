import React from 'react';
import Aux from 'react-aux';

import CategoriesWidget from '../Widgets/CategoriesWidget';
import CheckboxWidget from '../Widgets/CheckboxWidget';

const productPage = () => {
  return <Aux>
           <main>
           <div className="container">
            <div className="productsFlex">
             <section className="contentFlex">
              all products
             </section>
             <aside className="widgetFlex">
              <CategoriesWidget />
              <CheckboxWidget />
              <CheckboxWidget />
             </aside>
            </div>
           </div>
           </main>
          </Aux>;
}

export default productPage;
