import React, {Component} from 'react';

class SearchBar extends Component {
  state={
      term:''
    }


  render(){
    return(
      <div>
        <input onChange={event=> this.setState({term: event.target.value})}/>
        value of input: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;
