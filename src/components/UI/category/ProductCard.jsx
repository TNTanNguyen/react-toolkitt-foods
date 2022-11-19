import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "store/shopping-cart/cartSlice";
// import {addTo}

import "styles/product-card.css";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    const action = {
      id,
      title,
      image01,
      price,
    };
    dispatch(addItem(action));
  };
  return (
    <div className="product__item">
        <div className="product__img">
          <img src={image01} alt={title} className="w-50" />
        </div>
        <div className="product__content ">
          <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">${price}</span>
            <button className="addTOCart__btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
