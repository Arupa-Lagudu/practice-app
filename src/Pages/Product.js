import ProductsList from "./ProductsList";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = (prop) =>{
    const { prod } = prop;
    console.dir(prod)

if (!prod || prod.length === 0) return <p>Sorry...!!! Something is wrong</p>;

return (
  <Container className="mt-3 me-5 mb-5">
    <div className="mt-5"></div>
    <Row className="mt-5 mb-5">
      <Col sm={6} md={6} lg={5} xl={5} xxl={5}>
        <Carousel>
          {prod.images.map((img) => {
            return (
              <Carousel.Item>
                {" "}
                <img className="d-block w-100" src={img} alt="product" />{" "}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Col>
      <Col className="mt-3">
        <strong>{prod.title}</strong> #{prod.brand} {prod.category}
        <br />
        <Image
          src={prod.thumbnail}
          alt="thumbnail"
          thumbnail
          width={150}
          height={150}
        />
        <br />
        {prod.description}
        <br />
        <b>Stock: </b>
        {prod.stock}
        <br />
        <b>Price: </b>${prod.price}
        <br />
        <b>Discount: </b>
        {prod.discountPercentage}%<br />
        <b>Rating: </b>
        {prod.rating}
        <FontAwesomeIcon
          className="me-2"
          icon={faStar}
          style={{ color: "#FFD700" }}
        />
        <br />
        <a href="/">
          <span class="badge bg-warning text-dark px-3 p-2 mt-5">
            Buy Now
          </span>
        </a>
      </Col>
    </Row>
    <ProductsList />
  </Container>
);
};

export default Product;
