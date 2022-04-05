import Background from '../../res/sparkles.png'
import Jewel from '../../res/jewel.jpg'
import Image from 'next/image'


const LandingPage = ({ children }) => {
  return (
    <div className="landing-page" 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#222222',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}>
        {children}
    </div>
  )
}

const BackgroundSparkles = () => {
  return (
    <div className="bg" style={{
      backgroundImage: `url(${Background.src})`,
      backgroundAttachment: 'scroll',
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      opacity: '0.2',
      zIndex: -1,
    }}/>
  )
}

const LandingCard = () => {
  return (
    <div className="landing-card" style={{
      backgroundColor: '#111111',
      borderRadius: '5px',
      overflow: 'hidden',
      display: 'flex',
      height: '80vh',
      width: '80vw',
      maxHeight: '800px',
      maxWidth: '1500px',
      }}>
      <div className="profile-picture" style={{position: 'relative', height: '100vh', width: '100vw', maxHeight: '480px', maxWidth: '360px'}}>
        <Image src={Jewel} layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
  
}

export default function Home() {
  return (
    <LandingPage>
      <BackgroundSparkles/>
      <LandingCard/>
    </LandingPage>
  )
}
