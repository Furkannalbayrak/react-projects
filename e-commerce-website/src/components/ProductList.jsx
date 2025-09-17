import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/productSlice';
import Urun from './Urun'
import '../css/Products.css'

function ProductList() {

    const { products, searchedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    const filteredProducts = searchedProduct === ""
        ? products
        : products.filter((urun) => urun.title.toLowerCase().includes(searchedProduct.toLowerCase()))

    return (
        <div className='container'>
            {
                filteredProducts && filteredProducts.length > 0
                    ? filteredProducts.map((urun) => (
                        <Urun key={urun.id} urun={urun} />
                    ))
                    : <p className='not-found'>Ürün bulunamadı</p>
            }
        </div>
    )
}

export default ProductList