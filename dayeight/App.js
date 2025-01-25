import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import User from './User';
import Newbook from './Newbook';
import Oldbook from './Oldbook';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup  from './Signup';
import User1 from './user1';
import Form1 from './form';
import IncrementResetSubmit from './IncrementResetSubmit';

function App() {
  return (
    <>z
      <h1>WELCOME BACK..................</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/aboutus">ABOUT</Link></li>
          <li><Link to="/contact-us">CONTACT</Link></li>
          <li><Link to="/user/10">USER 10</Link></li>
          <li><Link to="/user/13">USER 13</Link></li>
          <li><Link to="/user/134">USER 134</Link></li>
          <li><Link to="/books/new-book">NEW-BOOK</Link></li>
          <li><Link to="/books/old-book">OLD-BOOK</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to ="/signup">signup</Link></li>
       <li><Link to="/User1">user</Link></li>
       <li><Link to="/form">form</Link></li>
       <li><Link to="/inc">clicking</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/books'>
            <Route path='new-book' element={<Newbook />} />
            <Route path='old-book' element={<Oldbook />} />
          </Route>
          <Route path='/Login' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/User1' element={<User1/>}/>
          <Route path='/form' element={<Form1/>}/>
          <Route path='/inc' element={<IncrementResetSubmit />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;














/*   form and routes */
/* task perform in invoice name was clicking the name was visible */