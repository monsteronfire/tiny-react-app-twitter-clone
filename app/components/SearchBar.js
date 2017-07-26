import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-wrapper'>
        <form>
          <input placeholder='Search'/>
          <i className='fa fa-search'></i>
        </form>
      </div>
    )
  }
}

export default SearchBar;
