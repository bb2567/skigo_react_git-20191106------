import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = props => (
  <>
    {window.location.pathname !== '/AttractionsIndex' &&
    window.location.pathname !== '/Attractionslist' ? (
      <footer className="ski-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-1 "></div>
            <div className="col-md-6 col-lg-2 footer-link">
              <ul className="footer-item">
                <li>
                  <p>認識SKIGO</p>
                </li>
                <li>
                  <a href="">關於SKIGO</a>
                </li>
                <li>
                  <a href="">新聞報導</a>
                </li>
                <li>
                  <a href="">加入我們</a>
                </li>
                <li>
                  <a href="">合作夥伴</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 footer-link">
              <ul className="footer-item">
                <li>
                  <p>會員服務</p>
                </li>
                <li>
                  <a href="">新手上路</a>
                </li>
                <li>
                  <a href="">會員分級</a>
                </li>
                <li>
                  <a href="">訂閱電子報</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 footer-link">
              <ul className="footer-item">
                <li>
                  <p>合作夥伴</p>
                </li>
                <li>
                  <a href="">廠商登入</a>
                </li>
                <li>
                  <a href="">聯合行銷</a>
                </li>
                <li>
                  <a href="">名人合作</a>
                </li>
                <li>
                  <a href="">同業交易</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 footer-link">
              <ul className="footer-item">
                <li>
                  <p>客服中心</p>
                </li>
                <li>
                  <a href="">問與答</a>
                </li>
                <li>
                  <a href="">訊息公告</a>
                </li>
                <li>
                  <a href="">退貨政策</a>
                </li>
                <li>
                  <a href="">付款方式</a>
                </li>
                <li>
                  <a href="">聯絡我們</a>
                </li>
                <li>
                  <a href="">線上客服</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 footer-link">
              <ul className="footer-item">
                <li>
                  <p>網站條款</p>
                </li>
                <li>
                  <a href="">服務條款</a>
                </li>
                <li>
                  <a href="">隱私政策</a>
                </li>
                <li>
                  <a href="">Cookie政策</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-1"></div>
          </div>
          <div className="row d-flex align-items-center pt-4">
            <div>
              <a className="footer-logo" href="">
                <img src="/images/footer/SKIGO_logo.svg" alt="" />
              </a>
            </div>
            <div className="flex-grow-1 pt-3">
              <p>© 2019 SkiGO. All Rights Reserved.</p>
            </div>
            <div className="d-flex footer-right align-items-center">
              <a href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/?lang=zh-tw">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/?hl=zh-tw">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    ) : (
      ''
    )}
  </>
)

export default Footer
