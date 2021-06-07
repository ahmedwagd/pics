import React, { Component } from 'react';
;


class SearchBar extends Component {

  state = { term: '' }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }
  render() {
    return (
      <div className='ui segment'>
        <form
          action=""
          className='ui form'
          onSubmit={this.onFormSubmit}
        >
          <div className='feild'>
            <label className='ui meduim header purple' htmlFor="">Image Search</label>
            <div className="ui left icon input ">
              <input type="text" placeholder='Search...' value={this.state.term} onChange={this.onInputChange} />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;