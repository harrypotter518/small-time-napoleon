import React, { Component } from 'react'
import ReactTouchEvents from 'react-touch-events'

export default class Quotes extends Component {

  
  render() {
    const { quote, increaseQuote, decreaseQuote, handleSwipe } = this.props

    return(
      <div className="quotes-container">
        <ReactTouchEvents onSwipe={handleSwipe}>
          <div className="quotes">
            <button className="arrow left" onClick={decreaseQuote} alt="left"></button>

            <div className={quote === 1 ? "quote" : "hide"}>
              <p className="testiment">“Truly one of the most unique and exciting bands I’ve seen come out of Louisville in a very long time.”</p>
              <p className="author">-Laura Shine, Assistant Program Director/On-Air Host 91.9 WFPK</p>
            </div>

            <div className={quote === 2 ? "quote" : "hide"}>
              <p className="testiment">“This is the sound of a band so connected in vision and so united upon it's path, that they come off sounding more like they've been playing together for decades.”</p>
              <p className="author">-Jonny Gutterman, Louisville.com</p>
            </div>

            <div className={quote === 3 ? "quote" : "hide"}>
              <p className="testiment">“And that sound, along with the likability and caliber of the band, is gaining them quite a following, and if the measure of one’s worth is their friends, STN stock is rising quickly.”</p>
              <p className="author">-Kyle Ware, Insider Louisville</p>
            </div>

            <button className="arrow right" onClick={increaseQuote} alt="right"></button>
          </div>
        </ReactTouchEvents>
        <div className="dots">
          <div className={quote === 1 ? "dot full" : "dot"}></div>
          <div className={quote === 2 ? "dot full" : "dot"}></div>
          <div className={quote === 3 ? "dot full" : "dot"}></div>
        </div>
      </div>
    )
  }
}