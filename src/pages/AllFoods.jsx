import products from "assets/fake-data/products";
import Helmet from "components/Helmet/Helmet";
import ProductCard from "components/UI/category/ProductCard";
import CommonSection from "components/UI/common-section/CommonSection";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";

import { useRef } from "react";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
const AllFoods = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keySearchTemp, setKeySearchTemp] = useState("");

  const typingTimeoutRef = useRef(null);

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setKeySearchTemp(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };

  const searchedProductList = products.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return null;
  });

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;

  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProductList.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProductList.length / productPerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  return (
    <Helmet title={"All-Food"}>
      <CommonSection title={"All Food"}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={keySearchTemp}
                  onChange={handleSearchTerm}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
            <ReactPaginate
              nextLabel="Next"
              previousLabel="Prev"
              onPageChange={changePage}
              pageCount={pageCount}
              containerClassName="paginationBttns"
            />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
