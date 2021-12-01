import axios from 'axios';

const KEY = 'AIzaSyDb_Y-aCj6q63Pm4yZ4E3MOi27QN0g28q8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
