import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails

    return (
      <li className="list-item">
        <div className="destination-container">
          <img src={imgUrl} alt={name} className="destination-image" />
          <p className="destination-name">{name}</p>
        </div>
      </li>
    )
  }
}

export default DestinationItem
