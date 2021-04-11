
import React, { useState, useEffect } from 'react';
import './productsComponent.css';
import { useParams } from "react-router-dom";
function ProductsComponent() {
    let { myName } = useParams();
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                // setData(response)
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(myName);
    let namesCategory = [];
    let myProducts = [];
    if (data && data.length) {
        namesCategory = data.filter(name => name.nameCategory == myName);
        console.log(namesCategory);
        myProducts = namesCategory[0].products.map(product => <p>
            <div className="products">{product.description}</div></p>)
    }
    console.log(myProducts);
    return (
        <div>
            <span>{myName}</span>
            <div>{myProducts}</div>
        </div>
    );
}
export default ProductsComponent;
