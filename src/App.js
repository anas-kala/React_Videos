import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitFromChild={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
