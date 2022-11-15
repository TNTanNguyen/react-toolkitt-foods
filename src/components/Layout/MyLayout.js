import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Cart from "components/UI/cart/Cart";
import { useSelector } from "react-redux";
import Routes from "routes/Routers";

const MyLayout = () => {
  const isShowCart = useSelector((state) => state.cartShow.cartIsVisible);

  return (
    <div>
      <Header />
      {isShowCart && <Cart />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default MyLayout;
