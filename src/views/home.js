import React from 'react'
import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppGallery from '../components/home/gallery '
import AppWork from '../components/home/work'
// import AppFaq from '../components/home/faq'
import AppEvents from '../components/home/events'
import AppContact from '../components/home/Contact'


const AppHome = () => {
  return (
    <div className='main'>
       <AppHero />
       <AppAbout />
       <AppGallery />
       <AppWork/>
       {/* <AppFaq /> */}
       <AppEvents />
       <AppContact />
    </div>
  )
}

export default AppHome