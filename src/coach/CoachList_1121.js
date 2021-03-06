import React from 'react'
import { Container, row, Accordion, Card } from 'react-bootstrap'
import '../css/coach_list.css'
import $ from 'jquery'
import FilterBread from '../components/goods/FilterBread'
import FilterLeftMenu from '../components/goods/FilterLeftMenu'
import ClassCard from './ClassCard'

class CoachList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      name: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      total: [],
      allnum: 0,
      sort: false,
    }
    // this.changeName = this.changeName.bind(this)
  }
  // JQ動畫
  async componentDidMount() {
    try {
      await this.setState({ loading: true })

      const response = await fetch('http://localhost:5000/coach-list', {
        method: 'POST',
        body: JSON.stringify({
            sort: this.state.sort,
            name: this.state.name,
          }),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const jsonObject = await response.json()
      await this.setState({ total: jsonObject }, function() {})
      let num = 0
      for (var i = 0; i < this.state.total.length; i++) {
        if (this.state.total[i] !== null) {
          num = num + 1
        }
      }
      await this.setState({ allnum: num }, function() {})
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // console.log('total：' + JSON.stringify(this.state.total.length))
    }

    //PC選單
    $('.coach-arrange a').click(e => {
      $(e.currentTarget)
        .css('border-bottom', '2px solid  #FD702D')
        .siblings()
        .css('border-bottom', '2px solid transparent')
    })
    // rwd 上方選單*2
    let coach_rwd_btn_state = true
    $('.coach-rwd-sort').hide()

    $('#coach-btn-rwd1').click(e => {
      if (coach_rwd_btn_state === false) {
        $('#coach-btn-rwd1-1').hide()
        coach_rwd_btn_state = true
      } else {
        $('#coach-btn-rwd1-1').show()
        coach_rwd_btn_state = false
      }
      console.log(coach_rwd_btn_state)
    })

    $('#coach-btn-rwd2').click(e => {
      if (coach_rwd_btn_state === false) {
        $('#coach-btn-rwd2-1').hide()
        coach_rwd_btn_state = true
      } else {
        $('#coach-btn-rwd2-1').show()
        coach_rwd_btn_state = false
      }
    })

    //左方側欄動畫
    let move = true

    $('#menu_active').click(e => {
      if (move === true) {
        $('#left').css({
          width: '0%',
          transform: 'translateX(-240px)',
        })
        $('.right_content').css('width', '100%')
        $('.hot_img').css('height', '200px')
        move = false
      } else {
        $('#left').css({
          width: '25%',
          transform: 'translateX(0px)',
        })
        $('.right_content').css('width', '75%')
        $('.hot_img').css('height', '150px')
        move = true
      }

      const img_width = $('.coach-card').width()
      console.log(img_width)
      const img_height = (150 * 4) / 3
    })
    // 左方側欄手風琴上下
    let up_down_icon = true

    $('.fa-angle-up').show()
    $('.fa-angle-down').hide()

    $('.coach-select').click(e => {
      if (up_down_icon === false) {
        up_down_icon = true
        $(e.currentTarget)
          .find('.fa-angle-up')
          .show()
        $(e.currentTarget)
          .find('.fa-angle-down')
          .hide()
      } else {
        $(e.currentTarget)
          .find('.fa-angle-up')
          .hide()
        $(e.currentTarget)
          .find('.fa-angle-down')
          .show()
        up_down_icon = false
      }
    })
  }

  filterfetch = () => {
    let filterparams = {
      sort: this.state.sort,
      name: this.state.name,
    }
    const response2 = fetch('http://localhost:5000/coach-list', {
      body: JSON.stringify(filterparams), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(response => response.json()) // 輸出成 json
      .then(json => {
        console.log(json)
        console.log(this)
        this.setState({
          total: json,
        })

        let num2 = 0
        for (var i = 0; i < this.state.total.length; i++) {
          if (this.state.total[i] !== null) {
            num2 = num2 + 1
          }
        }
        this.setState({ allnum: num2 }, function() {})
      })
  }

  //篩選
  changeName = (pos, value) => {
    const newName = [...this.state.name]
    newName[pos - 1] = value

    this.setState(
      {
        name: newName,
      },
      this.filterfetch
    )
  }
  // 排序從高到低 sort = true
  ChangeSort = () => {
    this.setState({ sort: true }, () => {
      let params = {
        sort: this.state.sort,
        name: this.state.name,
      }
      const responseSort = fetch('http://localhost:5000/coach-list', {
        body: JSON.stringify(params), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json',
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            total: json,
          })
        })
    })
  }
  // 排序從低到高 sort = false
  ChangeSort2 = () => {
    this.setState({ sort: false }, () => {
      let params = {
        sort: this.state.sort,
      }
      const responseSort2 = fetch('http://localhost:5000/coach-list', {
        body: JSON.stringify(params), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json',
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            total: json,
          })
        })
    })
  }

  render() {
    return (
      <>
        <div className="container">
          {/* part1 麵包屑 */}
          <FilterBread />

          {/* part2 篩選btn + 排列選擇 + 總項目欄位 */}

          <div className="row coach-rwd-active">
            <div className="col-3">
              <button id="menu_active" className="btn coach-btn-active">
                <i className="fas fa-list"></i> 顯示篩選列
              </button>
            </div>
            <div className="coach-arrange col-9 d-flex justify-content-between">
              <a href="#" onClick={this.ChangeSort}>
                價格 ： 從高到低
              </a>
              <a href="#" onClick={this.ChangeSort2}>
                價格 ： 從低到高
              </a>
              <span className="coach-item-num">{this.state.allnum}項目</span>
            </div>
          </div>
          {/*  rwd 最上方搜尋 bar */}
          <div className="coach-rwd-search d-flex">
            {/* btn1 */}
            <div className="coach-btn-rwd">
              <div id="coach-btn-rwd1" className="btn coach-btn-rwd-logo">
                <i className="fas fa-list"></i>篩選
              </div>
              <div id="coach-btn-rwd1-1" className="accordion coach-rwd-sort">
                <FilterLeftMenu partentfc={this.changeName} />
              </div>
            </div>

            {/* btn2  */}
            <div className="coach-btn-rwd">
              <div id="coach-btn-rwd2" className="btn coach-btn-rwd-logo">
                <i className="fas fa-sort-amount-down-alt"></i>排序
              </div>
              <div id="coach-btn-rwd2-1" className="coach-rwd-sort">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      人氣
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <input type="checkbox" name="vehicle1" value="Bike" />
                        收藏數
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      價錢
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <input type="checkbox" name="vehicle1" value="Bike" />
                        從高到低
                        <br />
                        <input type="checkbox" name="vehicle1" value="Bike" />
                        從低到高
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
          {/* 左邊篩選列 + 右邊內容頁 */}
          <div className="coach-all-content d-flex justify-content-end ">
            {/* 左邊篩選列 */}
            <div id="left" className=" left_menu ">
              <FilterLeftMenu partentfc={this.changeName} />
            </div>
            {/* 右邊內容列 */}
            <div
              id="right"
              className="content-rwd d-flex  right_content bg_white "
            >
              <ClassCard filter={this.state.total} />
            </div>
            {/* 右邊內容列END */}
          </div>
          {/* container-end */}
        </div>
      </>
    )
  }
}

export default CoachList
