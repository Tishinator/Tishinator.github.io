import vid from '../../assets/videos/socialsaver_demo.mp4'
function SocialSaver() {
    return (
      <video width="100%" height="500" controls>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
export default SocialSaver;  