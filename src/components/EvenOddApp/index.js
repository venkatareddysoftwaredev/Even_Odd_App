import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {incrementNumber: 0}

  onIncrement = () => {
    const number = Math.floor(Math.random() * 101)
    this.setState(() => ({incrementNumber: number}))
  }

  render() {
    const {incrementNumber} = this.state
    return (
      <div className="main-bg-container">
        <div className="app-bg-container">
          <h1 className="main-heading">Count {incrementNumber}</h1>
          <h3 className="sub-heading">
            Count is {incrementNumber % 2 === 0 ? 'Even' : 'Odd'}
          </h3>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
