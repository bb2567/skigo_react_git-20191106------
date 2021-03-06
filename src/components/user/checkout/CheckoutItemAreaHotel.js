import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const productInfo = {
  color: '#a8a8ab',
}
class CheckoutItemAreaHotel extends Component {
  render() {
    return (
      <>
        <div className="shop-box mb-3">
          <div className="shop-vendor-name">電子票券商品</div>
          <Row className="flex-row-reverse">
            <Col
              md={5}
              className="d-flex flex-column px-5 py-3 justify-content-center"
            >
              <h5>收件資訊</h5>
              <p>付款後請至email確認商品</p>
            </Col>
            {console.log(this.props.checkoutData)}
            {this.props.checkoutData.map((item, index) => {
              if (
                item.prodType === 'hotels' ||
                item.prodType === 'areas' ||
                item.prodType === 'coaches'
              ) {
                return (
                  <>
                    <Col key={index} md={7} className="shop-item m-0 px-4 mb-5">
                      <div className="d-flex mt-2 justify-content-between">
                        <div className="shop-product-photo">
                          <a href="" className="">
                            <img
                              className=""
                              src={item.coverImg}
                              alt="商品照片"
                            />
                          </a>
                        </div>
                        <div>
                          <div
                            className="d-flex flex-column ml-2"
                            style={{ width: '16rem' }}
                          >
                            <div className="fw-500">{item.vendor}</div>
                            <div>{item.name}</div>
                            <div>
                              {item.info.map((info, index) => {
                                return (
                                  <p
                                    className="m-0"
                                    key={index}
                                    style={productInfo}
                                  >
                                    {info}
                                  </p>
                                )
                              })}
                            </div>
                            <div>X {item.qty}</div>
                          </div>
                        </div>
                        <div className="align-self-end text-right">
                          NT$ {item.price}
                        </div>
                      </div>
                      <div className="shop-subtotal text-right pt-3">
                        商品小計
                        <span className="ml-2 user-darkblue-text">
                          NT$ {item.totalAmt}
                        </span>
                      </div>
                    </Col>
                    <Col md={5}></Col>
                  </>
                )
              } else return ''
            })}
          </Row>
        </div>
      </>
    )
  }
}

export default CheckoutItemAreaHotel
