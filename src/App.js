import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAyoaA4PHT2JDH8ZO6u1im-oWaRqnzLQqc';

class App extends Component {
 constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('documentary');
  }
//method for youtube search api; 1st argument will be a key,which has 2 other arguement (1)key, (2)arguement what we're searching for(song);
// arrow function gets the data from the server

videoSearch(term) {
  YTSearch({ key: API_KEY, term: term }, videos => {
    // console.log("vide0",videos);
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render(){
    return(
      <div className="App">
        <h1>VideoTube</h1>
        <SearchBar onSearchChange={(term)=> this.videoSearch(term)}/>
      {/*prased data to the child*/}
      <VideoDetail video={this.state.selectedVideo}/>
        <div className="absolute">
          <VideoList videos={this.state.videos}
          onSelectedVideo={(selectedVideo) => this.setState({selectedVideo})}
          />
        </div>
      </div>
    )
  }
}

export default App;
