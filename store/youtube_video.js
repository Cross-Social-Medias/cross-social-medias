import axios from 'axios';

export const state = () => ({
  videos: null,
  error: ""
});

export const mutations = {
  FETCH_VIDEOS(state, { videos, error }) {
    state.videos = videos.slice();
    state.error = "";
  },
  ADD_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  fetchVideos({ commit }, { channelId }) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&channelId=${channelId}&maxResults=20&key=${process.env.youtubeApiKey}`)
      .then(response => {
        const { items, error } = response.data;
        const videos = items.map(item => {
          const { title, description, publishedAt, thumbnails } = item.snippet;
          const { videoId } = item.id;
          return { title, description, videoId, publishedAt, thumbnail: thumbnails.medium };
        });
        commit('FETCH_VIDEOS', { videos, error });
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The user does not exist or there is a network issue. Please Try again !");
      });
  }
}
