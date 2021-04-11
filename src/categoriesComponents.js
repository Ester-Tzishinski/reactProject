
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, } from "react-router-dom";
import './categoriesComponents.css';
import ProductsComponent from './productsComponent';
import { useParams } from "react-router-dom";
function CategoriesComponents() {
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
    console.log(data)
    let match = useRouteMatch();

    
    return (
        <div className="CategoriesComponents">
            {
                data && data.length && data.map((Categories) => (<button><Link to={`${match.url}/${Categories.nameCategory}}`}>{Categories.nameCategory}</Link></button>))
            }
            <Switch>
                <Router path={`${match.path}/:myName`}>
                    <ProductsComponent />
                </Router>
                <Route path={match.path}>
                    
                </Route>
            </Switch>
        </div>

    );
}
export default CategoriesComponents;
