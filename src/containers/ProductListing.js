import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import data from '../data/data.json'
import { setProducts } from "../redux/actions/productAction";
const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("../data/data.json").catch((err) => {
            console.log(err);
        })
        dispatch(setProducts(data));
    }
    useEffect(() =>{
        fetchProducts();
    }, [])
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing