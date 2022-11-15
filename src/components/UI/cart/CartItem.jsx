import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { addItem, removeItem, deleteItem } from "store/shopping-cart/cartSlice";
import "styles/cart-item.css";

const CartItem = ({ item }) => {
  const { title, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem(item));
  };
  const handleDecrease = () => {
    dispatch(removeItem(item.id));
  };
  const handleDeleteItem = () => {
    dispatch(deleteItem(item));
  };
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={handleIncrease}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={handleDecrease}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={handleDeleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
