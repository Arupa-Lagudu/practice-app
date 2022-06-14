import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ProdList = (props) => {
    const { prods } = props;


if (!prods || prods.length === 0) return <p>Sorry...!!! No Products Available</p>;
return (
  <Container className='mt-5'>
    <h2 className='mb-4 text-center mt-2'>Available Products</h2>
    {prods.products.map((prod) => {
      return (
        <a href={'/Products/'+prod.id} className="text-decoration-none text-dark">
          <Row className='mt-5 mb-5'>
            <Col sm={5} md={5} lg={4} xl={4} xxl={3}>
              <Carousel>
               {prod.images.map((img) => { 
                return (
                  <Carousel.Item> 
                    <img 
                      className="d-block w-100" 
                      src={img} alt="product"/> 
                    </Carousel.Item>
                    )
                })}
              </Carousel>
            </Col>
            <Col sm={7} md={7} lg={8} xl={8} xxl={9}>
              <strong>
                {prod.title}
              </strong> 
              #{prod.brand} {prod.category}
              <br/>
              <Image 
                src={prod.thumbnail} 
                alt='thumbnail' 
                thumbnail 
                width={150} 
                height={150}
              />
              <br/>
              {prod.description}
              <br/>
              <b>Stock:  </b>
              {prod.stock}
              <br/>
              <b>Price: </b>
              ${prod.price}
              <br/>
              <b>Discount:  </b>
              {prod.discountPercentage}%
              <br/>
              <b>Rating:  </b>
              {prod.rating}<FontAwesomeIcon className="me-2" icon={faStar} style={{color: "#FFD700"}} />
            </Col>
          </Row>
        </a>
      );
    })}
  </Container>
);
};

export default ProdList;