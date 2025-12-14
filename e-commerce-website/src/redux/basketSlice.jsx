import { createSlice } from '@reduxjs/toolkit'

const getFromStorage = () => {  // doluysa verileri çeker yoksa boş dizi gönderir
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  else {
    return [];
  }
}

const initialState = {
  products: getFromStorage(),
  drawer: false,
  totalPrice: 0,
}

const writeToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products && state.products.find((urun) => urun.id === action.payload.id);

      if (findProduct) {
        findProduct.amount += action.payload.amount;
      }
      else {
        // Yeni ürünse listeye ekle
        state.products.push(action.payload);
      }

      writeToStorage(state.products);

      // Fiyatı güncelle
      state.totalPrice = 0;
      state.products.forEach((urun) => {
        state.totalPrice += urun.price * urun.amount;
      });
    },

    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    calculateTotalPrice: (state) => {
      state.totalPrice = 0;
      state.products && state.products.forEach((urun) => {
        state.totalPrice += urun.price * urun.amount
      })
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

      state.totalPrice = 0;
      state.products.forEach((urun) => {
        state.totalPrice += urun.price * urun.amount;
      });

      writeToStorage(state.products); // Güncellenmiş veriyi localStorage'a yaz
    }

  }
})

export const { addToBasket, setDrawer, calculateTotalPrice, deleteProduct } = basketSlice.actions
export default basketSlice.reducer

