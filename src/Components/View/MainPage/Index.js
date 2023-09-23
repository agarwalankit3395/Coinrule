import React from 'react'
import Home from './Home';
import CreateAutomated from './CreateAutomated';
import TradeAcrossExchanges from './TradeAcrossExchanges';
import PopularExchanges from './PopularExchanges';
import FeaturedOn from './FeaturedOn';
import MeetFoundingTeam from './MeetFoundingTeam';
import About from '../abouts/About'
import TermsServiceAbout from './TermsServiceAbout';

const Index = () => {
  return (
    <div>
      {/*<Home />  
        <FeaturedOn/>
        <PopularExchanges />*/}
      <About />
      {/*<CreateAutomated /> 
        <TradeAcrossExchanges />
  <MeetFoundingTeam/>*/}
  {/* <TermsServiceAbout /> */}
      
    </div>
  )
}

export default Index;