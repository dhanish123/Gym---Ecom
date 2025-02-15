import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./Details.scss";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Services from "../Services/Services";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import CommentBox from "../CommentBox/CommentBox";
import ProductSalesChart from "../ProductSalesChart/ProductSalesChart";
import Rating from "../Rating/Rating";

const Details = () => {
  const [data, setDatas] = useState({});
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [reviews,setReviews] = useState()
  //rating
  const [userRating, setUserRating] = useState(0);

  const {id}=useParams()

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    let existing = productsInCart.some((i) => {
      if (product.id === i.id) {
        return i;
      }
    });

    if (existing) {
      const Fnotify = () => {
        toast.error("Item is already in cart", {
          position: toast.POSITION.TOP_CENTER,
        });
      };
      Fnotify();
    } else {
      const newProduct = {
        ...product,
        count: 1,
      };
      setProducts([...productsInCart, newProduct]);
    }
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  const emptyCart = () => {
    setProducts([]);
  };

  const getData = async () => {
    const resp = await fetch(`http://localhost:5004/data/${id}`);
    const json = await resp.json();
    setDatas(json);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Link to={"/Services"} className="Cb">
        {" "}
        <BsFillArrowLeftCircleFill
          style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
        />
      </Link>

      <ToastContainer />
      <ShoppingCart
        visibilty={cartsVisibilty} // cart pop up avvan
        products={productsInCart} //full page visible
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        emptyCart={emptyCart}
      />
      <div className="cartbtndiv">
        <Button
          className="cartbtn"
          style={{ backgroundColor: "blue", width: "40px" }}
          onClick={() => setCartVisible(true)}
        >
          {productsInCart.length > 0 && (
            <span className="product-count">{productsInCart.length}</span>
          )}
          <FaShoppingCart style={{ marginTop: "4px", marginRight: "12px" }} />
        </Button>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src={data.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1"></div>
              <h1 className="display-5 fw-bolder">{data.title}</h1>
              <div className="fs-5 mb-5">
                <span>{data.description}</span>
              </div>
              <div className="d-flex">
                <button
                  onClick={() => addProductToCart(data)}
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="saleschart-outer">
              <div className="saleschart">
                <ProductSalesChart salesData={data.sales} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rating-head">
        <h1>Your Rating: {userRating}</h1>
        <Rating initialRating={userRating} onChange={handleRatingChange} />
      </div>

      <CommentBox id={id} />
    </div>
  );
};

export default Details;
