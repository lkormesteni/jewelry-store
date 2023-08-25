import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductDetails from "./ProductDetails.jsx";


const Data = (props) => {
    const [data, setData] = useState([]);

    // Move fetchData outside of the return statement
    const fetchData = async () => {
        console.log('Fetching data...');
        try {
            const response = await axios.get('http://127.0.0.1:3000/product'); // Corrected the URL
            setData(response.data);
            console.log('Data fetched:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="products">
                {data.map((element, key) => (
                    <ProductDetails key={key} element={element}/>
                ))}        
        </div>
    );
}

export default Data;
