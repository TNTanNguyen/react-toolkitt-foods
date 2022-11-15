import React from "react";
import Helmet from "components/Helmet/Helmet";
import CommonSection from "components/UI/common-section/CommonSection";

import products from "assets/fake-data/products";
import productImg from "assets/images/product_01.1.jpg";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  return (
    <Helmet title="Food-details">
      <CommonSection title="product 01" />
      <section>
        <Container>
          <Row>
          <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  
                >
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                >
                  <img src={productImg} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                >
                  <img src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={productImg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
