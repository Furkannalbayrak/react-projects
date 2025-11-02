import React, { useState } from 'react'
import '../css/currency.css';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

const BASE_URL="https://api.freecurrencyapi.com/v1/latest";
const APIKEY = import.meta.env.VITE_FREECURRENCYAPI_KEY;

function currency() {

    const [amount, setAmount] = useState(1);
    const [firstUnit, setFirstUnit] = useState("USD");
    const [secondUnit, setSecondUnit] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange =  async ()=>{
        const response = await axios.get(`${BASE_URL}?apikey=${APIKEY}&base_currency=${firstUnit}`);
        const result = ((response.data.data[secondUnit]) * amount).toFixed(3);
        setResult(result);
    }

    return (
        <div className='bigContainer'>
            <div className='container'>
                <div>
                    <h1 className='title'>DÖVİZ KURU ÇEVİRİCİ</h1>
                </div>

                <div className='container-child'>
                    <input className='amount' type="number" value={amount}
                    onChange={(e) => setAmount(e.target.value)} />

                    <select onChange={(e)=> setFirstUnit(e.target.value)} className='first-option'>
                        <option >USD</option>
                        <option >EUR</option>
                        <option >TRY</option>
                    </select>

                    <FaArrowRightLong style={{ fontSize: "40px", marginRight: "15px", marginLeft:"15px" }} />

                    <select onChange={(e)=> setSecondUnit(e.target.value)} className='second-option'>
                        <option >TRY</option>
                        <option >USD</option>
                        <option >EUR</option>
                    </select>

                    <input type="number" readOnly onChange={(e)=> setResult(e.target.value)} className='result' value={result} />
                </div>
            </div>

            <div className='convert-div'>
                <button onClick={exchange} className='convert'>Dönüştür</button>
            </div>
        </div>
    )
}

export default currency