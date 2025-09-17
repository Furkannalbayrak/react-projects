import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';


const getFromStorage = () => {  // doluysa verileri çeker yoksa boş dizi gönderir
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  else {
    return [];
  }
}

const initialState = {
  products: [] = getFromStorage(),
  drawer: false,
  totalPrice: 0,
}

const writeToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
}


export const basketSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products && state.products.find((urun) => urun.id == action.payload.id);
      if (findProduct) {
        // daha önce eklenmiş olan ürün
        const updatedProducts = state.products.filter((urun) => urun.id != action.payload.id);
        findProduct.amount += action.payload.amount;
        state.products = [...updatedProducts, findProduct];
        writeToStorage(state.products);
      }
      else {
        state.products = [...state.products, action.payload];
        writeToStorage(state.products);
      }
    },

    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    calculateTotalPrice: (state) => {
      state.products && state.products.map((urun) => (
        state.totalPrice += urun.price * urun.amount
      ))
    },

    deleteProduct: (state, action) => {
      state.products = state.products.map((urun) => {
          if (urun.id === action.payload.id) {

            if (urun.amount > 1) {
              return { ...urun, amount: urun.amount - 1 }; // Ürün miktarını 1 azalt
              
            } else {
              return null; // Eğer miktar 1 ise, ürünü kaldır
            }
            
          }
          return urun;
        }) 
        .filter((urun) => urun !== null); // null olanları temizle

        calculateTotalPrice();
    
      writeToStorage(state.products); // Güncellenmiş veriyi localStorage'a yaz
    }

  }
})

export const { addToBasket, setDrawer, calculateTotalPrice, deleteProduct } = basketSlice.actions
export default basketSlice.reducer

