import products from "assets/fake-data/products";
import Helmet from "components/Helmet/Helmet";
import ProductCard from "components/UI/category/ProductCard";
import CommonSection from "components/UI/common-section/CommonSection";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";

import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
const AllFoods = (props) => {
  const [searchTerm, setSearchTerm] = useState("");


  // const handleSubmit = () => {
  //   console.log(filters);

  //   const searchProductList =products.filter((item) => {
  //     if (searchTerm === "") {
  //       return item;
  //     }
  //     if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return item;
  //     }
  //     return null;
  //   });

  //   setFilterProductList(searchProductList);
  // };
  const searchProductList =products.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return null;
  });

  const handleChangeSort = (e) => {
    
    // setFilters((pre) => ({
    //   ...pre,
    //   sortKey: value,
    // }));
    // console.log(filters);

    // if (value === "ascending") {
    //   // const sortedProductList = [...filterProductList].sort((a, b) =>
    //   //   a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    //   // );
    //   const sortedProductList = [...filterProductList].sort(function (a, b) {
    //     if (a.title < b.title) {
    //       return -1;
    //     }
    //     if (a.title > b.title) {
    //       return 1;
    //     }
    //     return 0;
    //   });

    //   setFilterProductList(sortedProductList);
    // }

    // if (value === "descending") {
    //   const sortedProductList = [...filterProductList].sort(function (a, b) {
    //     if (a.title > b.title) {
    //       return -1;
    //     }
    //     if (a.title < b.title) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    //   setFilterProductList(sortedProductList);
    // }

    // if (value === "high-price") {
    //   const sortedProductList = [...filterProductList].sort(function (a, b) {
    //     if (a.price > b.price) {
    //       return -1;
    //     }
    //     if (a.price < b.price) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    //   setFilterProductList(sortedProductList);
    // }
    // if (value === "low-price") {
    //   const sortedProductList = [...filterProductList].sort(function (a, b) {
    //     if (a.price < b.price) {
    //       return -1;
    //     }
    //     if (a.price > b.price) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    //   setFilterProductList(sortedProductList);
    // }
  };

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;

  const visitedPage = pageNumber * productPerPage;

  const displayPage = searchProductList.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchProductList.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title={"All-Food"}>
      <CommonSection title={"All Food"}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line" ></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" onChange={handleChangeSort}>
                <option value="">
                   Default
                  </option>
                  <option value="a-z">
                    Alphabetically, A-Z
                  </option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="asc">High Price</option>
                  <option value="desc">Low Price</option>
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
