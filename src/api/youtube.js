// public Key 
import axios from 'axios';
const KEY = 'AIzaSyA3vPkM9Dcm0HU8LLT0OV8kikl3_-tG2yY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
}); 