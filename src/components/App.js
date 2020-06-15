import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
// import youtube from '../apis/youtube';



class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onSubmitText('javascript');
    }

    onSubmitText = async (text) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDcgLOwUrCGNtb3tvthMYweJkZ63ZuVmkY',
                q: text
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo: video});
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card p-5 my-4">
                            
                            <SearchBar onFormSubmit={this.onSubmitText} />
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <VideoDetails video={this.state.selectedVideo} /> 
                                </div>
                                <div className="col-md-4">
                                    <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;