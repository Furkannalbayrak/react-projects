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

    return (
        <div className='container'>
            {
                searchedProduct == "" 
                ? products && products.map((urun) => (
                    <Urun key={urun.id} urun={urun} />

                )) //filter: dizi üzerinde dönerken urun başlıgını içeren elemanlarla yeni bir dizi oluşturuyor 
                : products && products.filter((urun) => urun.title.toLowerCase().includes(searchedProduct.toLowerCase()))
                .map((urun)=>(
                    <Urun key={urun.id} urun={urun} />
                ))
            }
        </div>
    )
}

export default ProductList