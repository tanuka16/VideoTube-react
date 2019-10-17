import React, {Component} from 'react';
import '../style/style.css';

class SearchBar extends Component {
  state={
      term:''
    }
    onSearchTermChange(term){
      this.setState({term})
      this.props.onSearchChange(term)
    }

  render(){
    return(
      <div className="search-bar">
        <input onChange={event=> this.onSearchTermChange(event.target.value)}/>
        value of input: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;
