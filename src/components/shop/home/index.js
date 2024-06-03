import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
// import FollowONIG from "./FollowMe";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      {/* <ourShop /> */}
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center" >
            WELCOME TO OUR STORE
          </h3>
          <div className="sub-title-about-shop text-center mt-4">
            Bring something special to you<br />
            {/* bring an extremely pleasant fragrance */}
          </div>
          <div className="content-about-shop m-4 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-3">
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img className="fix-our-shop-image" src="./image/ingredients.jpg" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Environmental Protection</h6>
                <p className="item-about-shop-header">Reduce the amount of waste released into the environment</p>

              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img className="fix-our-shop-image" src="./image/quality.png" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Many unique products</h6>
                <p className="item-about-shop-header">Bringing many unique products in the 80s and 90s
                  {/* <br />compared to product price */}
                </p>

              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img className="fix-our-shop-image" src="./image/scents.jpg" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Improved style</h6>
                <p className="item-about-shop-header">Make your style attractive  </p>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="mr-4 ml-4">
        <ProductCategory />
      </section>
      {/* Product Section */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section> */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FollowONIG />
      </section> */}
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
