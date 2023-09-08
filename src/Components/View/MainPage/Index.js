import React from 'react' 
import Home from './Home';
import CreateAutomated from './CreateAutomated';
import TradeAcrossExchanges from './TradeAcrossExchanges';
import PopularExchanges from './PopularExchanges';
import FeaturedOn from './FeaturedOn';
import MeetFoundingTeam from './MeetFoundingTeam';

const Index = () => {
  return (
    <div>
        <Home />  
        <FeaturedOn/>
        <PopularExchanges />
        <CreateAutomated /> 
        <TradeAcrossExchanges />
        <MeetFoundingTeam/>
    </div>
  )
}

export default Index;