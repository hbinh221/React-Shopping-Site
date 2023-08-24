import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removelectedProducts, selectedProducts } from "../redux/actions/productAction";
const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const products = useSelector((state) => state.allProducts.products);
    const {title, price, category} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    const fetchProduct =  () => {
        const response = products.find(item => item.id === productId);
        dispatch(selectedProducts(response));
    }
    useEffect(() => {

        if(productId) fetchProduct();
    
    }, [productId])
    return(
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  {/* <img className="ui fluid image" src={image} /> */}
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ProductDetail