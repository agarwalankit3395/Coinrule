import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Components/utils/Theme';
import HeaderBar from './Components/Layouts/Headers/HeaderBar'
import Index from './Components/View/MainPage/Index';
import FAQ from './Components/View/FAQs/FAQ';
import Footer from './Components/Layouts/Footers/Footer'
import Price from './Components/View/priceings/Price';
import Invests from './Components/View/Invest/Invests';
import About from './Components/View/abouts/About';
import { Web3ContextProvider } from './Components/utils/WalletContext';
import Aboutus from './Components/View/aboutUs/Aboutus';
import Serviceterms from './Components/View/termofServices/Serviceterms';
import UsContact from './Components/View/Contactus/usContact';
const Wrapper = styled.div`  
  color: ${({ theme }) => theme.text}; 
`

const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <Web3ContextProvider>
        <BrowserRouter>
          <HeaderBar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Index />}>
                <Route index element={<Index />} />
              </Route>
              <Route path='/about' element={<About />} />
              <Route path='/price' element={<Price />} />
              <Route path='/invest' element={<Invests />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/aboutus' element={<Aboutus />} />
              <Route path='/termsofServices' element={<Serviceterms />} />
              <Route path='/contactUs' element={<UsContact />} />
            </Routes>
          </Wrapper>

          <Footer />
        </BrowserRouter>
      </Web3ContextProvider>
    </ThemeProvider>
  )
}

export default App;