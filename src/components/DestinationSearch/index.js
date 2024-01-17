import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInputValue: '',
  }

  onSearchInputChange = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInputValue} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="input-element"
            value={searchInputValue}
            onChange={this.onSearchInputChange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
