

const videoSrc = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';

const videoContainer = document.querySelector('.gym__video');
const videoPlayButton = videoContainer.querySelector('.gym__play-button');

const addIframe = () => {
  videoPlayButton.addEventListener('click', () => {
    const iFrame = document.createElement('iframe');

    iFrame.setAttribute('src', videoSrc);
    iFrame.style.width = '100%';
    iFrame.style.height = '100%';
    iFrame.setAttribute('allowfullscreen', '');
    iFrame.setAttribute('allow', 'autoplay; encrypted-media');

    videoContainer.appendChild(iFrame);
  });
};

export {addIframe};
/*
<iframe
  id="ytplayer"
  type="text/html"
  width="364"
  height="228"
  src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture"
  allowfullscreen>
</iframe>
 */
