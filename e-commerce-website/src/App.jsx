import { useEffect, useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header'
import ProductList from './components/ProductList';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import './css/Basket.css'
import { calculateTotalPrice, deleteProduct, setDrawer } from './redux/basketSlice';

function App() {

  const { products, drawer, totalPrice} = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [])

  return (
    <div>
      <Container  >
        <Header />
        <RouterConfig />
        <Loading />

        <Drawer anchor='right' onClose={() => dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((urun) => {
              return (
                <div key={urun.id} className='basket-card'>
                  <img className='basket-image' src={urun.image} alt="" />
                  <p className='basket-title'>{urun.title} ({urun.amount})</p>
                  <h2 className='basket-price'>{urun.price} $</h2>
                  <button onClick={()=> dispatch(deleteProduct(urun))} className='basket-button'>Sil</button>
                </div>
              )
            })
          }

          {
            totalPrice == 0 
            ? <div className='basket-totalPrice' >Sepetinizde Ürün bulunmamaktadır</div>
            : <div className='basket-totalPrice' >Toplam Tutar : {totalPrice} $</div>
          }
          
        </Drawer>
      </Container>
    </div>
  )
}

export default App
