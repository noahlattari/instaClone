import React, { useState } from 'react';
import PhotoFetch from './PhotoFetch';
import useFirestore from '../hooks/useFirestore';
import deleteImageFromFirestore from '../hooks/deleteImageFromFirestore';

//UploadForm component: Defines and handles user input of photos to be sent to upload.
const UploadForm = () => {

    const [files, setFiles] = useState([]); //React hooks
    const [error, setError] = useState(null);
    const { docs } = useFirestore('images');

    const types = ['image/png', 'image/jpeg', 'image/gif']; //Make sure user only uploads photos
    /* TODO: Add a size Limit */

    //Change Handler to parse form input and set out files array to be uploaded.
    const changeHandler = (e) => {  
        let selected = e.target.files;
        if(selected) {
            for (let i = 0; i < e.target.files.length; i++) {
              if(types.includes(selected[i].type)){
                const list = files;
                list.push(selected[i]);
                setFiles(list);
                setError('');
              } else {
                setFiles([]); //Empty our image array as user has an invalid upload
                setError('Select only image files! (png/jpg)');
              }
            }
        } else { //If file failed to get to the server
            const list = files;
            list.pop(selected);
            setFiles(list);
            setError('Error on form upload, please try again!');
        }
    }
    
    //Click listener to delete all images from the bucket & firestore.
    const deleteAllImages = (e) => { 
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

    //Return some JSX for our emoji/buttons.
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
            { error && <div className="error">{ "Error:" + error }</div>}
            { files.length !== 0 && <PhotoFetch files={files} setFiles={setFiles} /> }
          </div>
        </form>
      );
    }

export default UploadForm;