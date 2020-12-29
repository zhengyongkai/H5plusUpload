<template>
  <div>
    <videoPlayer
      class="vjs-custom-skin videoPlayer"
      :options="playerOptions"
    ></videoPlayer>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import 'videojs-flash';

export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        height: '300',
        sources: [
          {
            type: 'rtmp/mp4',
            src: 'rtmp://192.168.10.65:1935/live/TV-PB26C-1-2' //rtmp流地址
          }
        ],
        techOrder: ['flash'],
        autoplay: false,
        controls: true,
        poster:
          'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg'
      }
    };
  }
};
</script>
