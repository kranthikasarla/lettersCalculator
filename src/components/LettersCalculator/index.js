// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {noOfLetters: 0}

  countTheNoOfLetters = event => {
    this.setState({noOfLetters: event.target.value.length})
  }

  render() {
    const {noOfLetters} = this.state
    return (
      <div className="bg-container">
        <div className="image-counter-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div>
          <h1 className="heading">Calculate the Letters you entered</h1>
          <div className="input-container">
            <label className="input-letter" htmlFor="myInput">
              Enter the phrase
            </label>
            <input
              id="myInput"
              type="text"
              placeholder="Enter the phrase"
              className="input-box"
              onChange={this.countTheNoOfLetters}
            />
          </div>
          <div className="letter-count-container">
            <p className="count-letters">No.of letters: {noOfLetters}</p>
          </div>
        </div>
        <div className="image-counter-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="avatar"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
