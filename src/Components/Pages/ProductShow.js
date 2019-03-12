import React from 'react';
import Aux from 'react-aux';

import SignUp from '../UI/SignUp';
import SignIn from '../UI/SignIn';

const productShow = () => {
  return <Aux>
           <main>
            <SignUp />
            <SignIn />
           </main>
          </Aux>;
}

export default productShow;
