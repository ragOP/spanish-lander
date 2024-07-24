import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Food from './pages/Food';
import Newp from './pages/13'
import Km from './pages/Km'
import Hell from "./pages/Hell"
function App() {
 console.log('s');
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/* c */}
       
             <Route path = "/engfe1" element = {<S />} />
             <Route path = "/fefb1" element = {<Newp />} />
             <Route path = "/bf1" element = {<Km />} />
             <Route path = "/km-engfe1" element = {<Hell />} />
          
          {/* <Route path = "/a" element = {<S />} /> */}

          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
