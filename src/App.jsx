import Navbar from './Components/Navbar';
import './App.css'
import Body from './Components/Body';
import Pricing from './Components/Pricing';
import Owner from './Components/Owner';
import Product from './Components/Product';
import Use from './Components/Use';
// eslint-disable-next-line no-unused-vars
import Network from './Components/Network';
import Network2 from './Components/Network2';
import Partners from './Components/Partners';
import FooterBox from './Components/FooterBox';
import Footer from './Components/Footer';

function App() {

  return (
   <div className="overflow-hidden border-transparent">
      <div className='sticky overflow-hidden'>
        <Navbar />
      </div>
    <Body />
    <Pricing className='w-full'/>
    <Owner /> 
    <Product />
    <Use />
    {/* <Network /> */}
    <Network2 />
    <Partners />
    <FooterBox />
    <Footer />
   </div>
  )
}

export default App
