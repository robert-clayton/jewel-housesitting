import Background from '../../res/sparkles.png'
import Jewel from '../../res/jewel.jpg'
import Image from 'next/image'
import Head from 'next/head'


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
        <Image src={Jewel} alt='Jewel' layout='fill' objectFit='contain'/>
      </div>
      {/* Change layout if on mobile */}
      <div className="profile-info" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        maxHeight: '800px',
        maxWidth: '1500px',
        }}>
        <div className="profile-name" style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          color: '#ffffff',
          fontFamily: 'Montserrat',
          sansSerif: 'true',
          }}>
          Jewel Weed
        </div>
        <div className="profile-title" style={{
          fontSize: '1em',
          color: '#aaaaaa',
          }}>
          Housesitting & Cleaning Services
        </div>
        

        <div className="profile-description" style={{
          fontSize: '1.2em',
          color: '#aaaaaa',
          fontFamily: 'Montserrat',
          sansSerif: 'true',
          }}>
          &nbsp;
          <p/>
          When you go on vacation, who watches your animals? The most common pet sitter is a family member or close friend, but what if they're unable to watch your animal or don't feel comfortable doing so? Some people may not have an issue when it comes to dogs and cats, but it can be different for birds and reptiles. Jewel's Housesitting services offer to be a pet sitter for every type of animal. Making sure they get the interaction, care, and diet that is required no matter what the species. This way you can leave town knowing your lizard will be well fed when you get back.
        </div>
      </div>
    </div>
  )  
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jewel&apos;s House Sitting</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/> 
      </Head>
      <LandingPage>
        <BackgroundSparkles/>
        <LandingCard/>
      </LandingPage>
    </div>
    
  )
}
