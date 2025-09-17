import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/productSlice';
import '../css/ProductDetails.css'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { addToBasket, calculateTotalPrice } from '../redux/basketSlice';

function ProductDetails() {

    const { id } = useParams();
    const { products } = useSelector((store) => store.product)
    const dispatch = useDispatch();

    const { selectedProduct } = useSelector((store) => store.product)
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
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((urun) => { //burda id sini bulduğumuz ürünü redux içindeki selectedProduct objesine geçiyoruz ve yolu uaztıyoruz ancak direkt olarak bir state tanımlayıp [product,setProduct] setProduct(urun) diyebilirdik
            if (urun.id == id) {
                dispatch(setSelectedProduct(urun));
            }
        })
    }

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