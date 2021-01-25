import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import SignUp from './Signup'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
  
  // return (
  //   <div className="App">
  //     <Title/> 
  //     <UploadForm />
  //     <ImageGrid setSelectedImg={setSelectedImg} />
  //     { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> /*Only render when you have a selectedImg */} 
  //   </div>
  // );
  
}

export default App;
