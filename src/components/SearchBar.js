import React from "react";
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

const SearchBar = (props) => {
  // console.log("searchbar props", props)
  return (
    <input
      className="form-control"
      type="text"
      value={props.value}
      placeholder='search'
      aria-label="Search"
      onChange ={ e => props.onSearch(e.target.value)}
    />
  );
};

const mapStateToProps = (store) => ({
  value: store.searchText
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (newSearch) => {dispatch( onSearch(newSearch) )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
