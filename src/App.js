import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAlbkgkqiiQMsLH3ZjlzqkynHH06DX3Sjw';

class App extends Component {
 constructor(props){
    super(props)
//method for youtube search api; 1st argument will be a key,which has 2 other arguement (1)key, (2)arguement what we're searching for(song);
// arrow function gets the data from the server
    YTSearch({key:API_KEY, term: 'songs'}, (data)=>{
      console.log(data);
    })
  }

  render(){
    return(
      <div className="App">
        <h1>YouTube</h1>
        <SearchBar/>
      </div>
    )
  }
}

export default App;
