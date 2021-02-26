import axios from 'axios';

const KEY = 'AIzaSyCi18tnjskDMEDOcZe3hqqMS_EPnRWN4X4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

