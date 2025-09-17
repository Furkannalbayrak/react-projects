import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/basketSlice';
import { setSearchedProduct } from '../redux/productSlice';

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [thema, setThema] = useState(true);
  const [value, setValue] = useState("");

  const { products } = useSelector((store) => store.basket);

  const changeThema = () => {
    const root = document.getElementById("root");

    if (thema == true) {
      root.style.backgroundColor = "rgb(65, 60, 60)";
      root.style.color = "white";
    }
    else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }

    setThema(!thema);
  }

  useEffect(() => {
    dispatch(setSearchedProduct(value));
  }, [value])

  return (
    <div className='main-header'>
      <div className='flex-row main-logo' onClick={() => navigate("/")} style={{ gap: "20px" }}>
        <img className='logo' src="./src/images/logo.png" />
        <p className='logo-text'>Furkan A.Ş</p>
      </div>

      <div className='main-input' style={{ gap: "15px" }} >
        <input onChange={(e) => setValue(e.target.value)} className='search-input' type="text" placeholder='Search' />
       
        <div>
          {
            thema ? <FaMoon className='icon-thema' onClick={changeThema} /> : <IoSunny className='icon-thema' onClick={changeThema} />
          }
        </div>

        <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
          <FaBasketShopping className='icon-basket' />
        </Badge>
      </div>
    </div>
  )
}

export default Header