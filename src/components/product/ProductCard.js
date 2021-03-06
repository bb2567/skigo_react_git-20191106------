import React from 'react'
import {
  Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../scss/product_card.scss'
import 'bootstrap/dist/css/bootstrap.css'


class ProductCard extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        
      }
      console.log(this.props.productData)
    }
    
  
    render(){
      return (
        <>
            <Card className="product_card">
                <div className="overlay">
                  <a href="#" className="item">加入購物車</a>
                  <Link to={`/product/${this.props.productData.No}`} className="item">查看商品</Link>
                </div>
                <Card.Img variant="top" src={this.props.productData.img[0]} />
                <Card.Body>
                  <Card.Title>{this.props.productData.name}</Card.Title>
                  <div className="product-card-pice">
                    <p>NT<span>{this.props.productData.price}</span></p>
                  </div>
                </Card.Body>
              </Card>
        </>
    )
  }
 
}

export default ProductCard
 




