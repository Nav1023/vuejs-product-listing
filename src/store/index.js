import {createStore} from 'vuex'

import ProductsData from '../../products.json';

export default createStore({
  state: {
    products: ProductsData.products
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    }
  }
});
