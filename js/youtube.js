const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
// script 를 찾아서 그 앞에서 호출
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // player 라는 id 를 찾음
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 처음 보여줄 유튜브 영상 Id
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' // loop 인 경우 추가
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}
