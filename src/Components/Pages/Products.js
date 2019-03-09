import React from 'react';
import Aux from 'react-aux';

import CategoriesWidget from '../Widgets/CategoriesWidget';
import CheckboxWidget from '../Widgets/CheckboxWidget';

const productPage = () => {
  return <Aux>
           <main className="container">
           <section>
            all products
           </section>
           <aside>
            <CategoriesWidget />
            <CheckboxWidget />
            <CheckboxWidget />
           </aside>
           </main>
          </Aux>;
}

export default productPage;
