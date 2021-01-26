import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';

//Main App function to build our page
function App() {
  
  const [selectedImg, setSelectedImg] = useState(null); //Helps use enlarge the image

  //return JSX and our components to build our app.
  return (
    <div className="App">
      <Title/> 
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> /*Only render when you have a selectedImg */} 
    </div>
  );
}

export default App;
