import { combineReducers } from 'redux';

import Cart from './Cart';
import Goods from './Goods';
import Filter from './Filter';

export default combineReducers({
  Cart,
  Goods,
  Filter,
});
