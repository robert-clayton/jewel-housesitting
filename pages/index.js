import Background from '../res/background.jpg';

export default function Home() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        // backgroundColor: 'transparent',
        opacity: '.69'
        }}/>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              <span className="text-primary">
                <i className="fas fa-home"></i>
              </span>
              Home
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
