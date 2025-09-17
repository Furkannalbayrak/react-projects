import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/productSlice';
import '../css/ProductDetails.css'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { addToBasket, calculateTotalPrice } from '../redux/basketSlice';

function ProductDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { selectedProduct, loading } = useSelector((store) => store.product)
    const { category, title, image, price, description } = selectedProduct;

    const [amount, setAmount] = useState(1);

    const arttir = () => {
        setAmount(amount + 1);
    }
    const azalt = () => {
        if (amount != 1) {
            setAmount(amount - 1);
        }
    }

    useEffect(() => {
        dispatch(getProductById(id));
    }, [id, dispatch])

    const addBasket = ()=>{
        const newObject = {
            id,
            price,
            description,
            image,
            title,
            amount
        }

        dispatch(addToBasket(newObject));
        dispatch(calculateTotalPrice());
    }

    if (loading) {
        return <div className='container'>Yükleniyor...</div>
    }

    if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
        return <div className='container'>Ürün bulunamadı</div>
    }

    return (
        <div className='container'>
            <div className='first-section'>
                <img className='image' src={image} alt="" />
            </div>

            <div className='second-section'>
                <h1 className='title'>{title} </h1>
                <h5 className='category'>{category} </h5>
                <p className='description'>{description} </p>
                <h1 className='ucret'>{price}$ </h1>

                <div className='icons'>
                    <FaMinusCircle onClick={azalt} /> {amount} <FaPlusCircle onClick={arttir} />
                </div>

                <div className='button-parent'>
                    <button onClick={addBasket} className='button'>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails