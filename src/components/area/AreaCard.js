import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

class AreaCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      total: [],
    }
  }

  // 元件 "已經 Did" 呈現在網頁上
  async componentDidMount() {
    this.setState({ total: this.props.filter ? this.props.filter : '' }, () => {
      this.setState({ loading: false })
    })
    AOS.init({
      duration : 1000,
      easing: 'ease-out-back',  
      delay: 600
  })
  }
  // async componentDidUpdate(prevProps) {

  //   if (this.props.filter !== prevProps.props.filter) {
  //     // this.setState({ total: this.props.filter })
  //     console.log('上次不等於這次')
  //   }
  // }
  // 金額轉千分位
  thousandComma = number => {
    let num = number.toString()
    const pattern = /(-?\d+)(\d{3})/

    while (pattern.test(num)) {
      num = num.replace(pattern, '$1,$2')
    }
    return num
  }

  render() {
    return (
      <>
        {/* {console.log('123')} */}
        {/* {console.log(this.props.filter)} */}
        {/* { if( this.props.filter == true ){} } */}
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
          </div>
        ) : (
          <>
            {this.props.filter.map((value, index) => {
              {/* console.log('ticket_sid:', value.ticket_sid, value.area_sid) */}
              //if (!value) return <></>

              //return `<h2>${value.ticket_sid}</h2>`
              return (
                <Link
                  className="ticket-card"
                  key={value.ticket_sid}
                  to={'/ticketarea/' + value.area_sid} data-aos="fade-up" data-aos-offset="80" data-aos-duration=".5"
                >
                  <div className="hot_img" data-ticket_sid={value.ticket_sid}>
                    <img
                      className="ticket_img_pic"
                      src={'/images/areas/' + value.ticket_pic}
                      alt=""
                    />
                  </div>
                  <div className="hot_card_word">
                    <p className="ticket_name" style={{minHeight: '65px'}}>{value.area_name}-{value.ticket_name}</p>
                    <p className="language font-orange d-flex">
                      <span>{value.ticket_age}</span>
                    </p>
                    <p>
                      {value.ticket_use_day}|{value.ticket_type}
                    </p>
                    <div className="d-flex justify-content-end">
                      <p
                        className="price"
                        style={{ color: '#fd702d', fontSize: '1.5rem' }}
                      >
                        NT {this.thousandComma(value.ticket_price)}
                      </p>
                    </div>
                    <div className="font-blue d-flex justify-content-center">
                      <p>
                        {value.ticket_start_date} ~ {value.ticket_end_date}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        )}
      </>
    )
  }
}

export default AreaCard
