import Background from '../../res/background.jpg';

export default function Home() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${Background.src})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        // opacity: '.69',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        }}/>

      <div className="container">
        <div className="row">
          Home
        </div>
      </div>
    </div>
  )
}
