import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import useFirestore from '../hooks/useFirestore';
import deleteImageFromFirestore from '../hooks/deleteImageFromFirestore';

const UploadForm = () => {
    const [files, setFiles] = useState([]); //react hooks
    const [error, setError] = useState(null);
    const { docs } = useFirestore('images');

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const changeHandler = (e) => {
        let selected = e.target.files;
        if(selected) {
          console.log(files);
            for (let i = 0; i < e.target.files.length; i++) {
              if(types.includes(selected[i].type)){
                const list = files;
                list.push(selected[i]);
                setFiles(list);
                setError('');
              } else {
                console.log("in else");
                setFiles([]);
                setError('Select only image files! (png/jpg)');
              }
            }
        } else if(selected.length === 0) {
            setFiles([]);
            setError('Error on upload, please try');
        }
    }
    
    const deleteAllImages = (e) => {
      console.log(typeof docs);
      console.log(docs.size);
      if(docs.length === 0){
        alert('Error: No photos to delete.');
      } else {
        var check = window.confirm("Are you sure you'd like to delete " + docs.length + " photos?");
        if(check){
          for(let i = 0; i < docs.length; i++){
            deleteImageFromFirestore(docs[i]);
          }
        }
      }
  }

    return (
        <form>
        <p>
          <label className="grow">
            <input type="file" id="files" multiple accept="image/*" onChange={changeHandler} />
             <span role="img" aria-label="folder emoji">📁</span> 
          </label>
          <label className ="grow">
            <span role="img" aria-label="red x emoji" onClick={deleteAllImages} >❌</span> 
          </label>
          </p>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { files.length !== 0 && <ProgressBar files={files} setFiles={setFiles} /> }
          </div>
        </form>
      );
    }

export default UploadForm;