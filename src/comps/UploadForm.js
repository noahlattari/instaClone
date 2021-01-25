import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import useStorage from '../hooks/useStorage';

const UploadForm = () => {
    const [files, setFiles] = useState([]); //react hooks
    const [error, setError] = useState(null);
    

    const types = ['image/*'];

    const changeHandler = (e) => {
        let selected = e.target.files;
        if(selected /*&& types.includes(selected.type)*/) {
          console.log(files);
            for (let i = 0; i < e.target.files.length; i++) {
                const list = files;
                list.push(selected[i]);
                setFiles(list);
                setError('');
            }
   
        } else {
            setFiles(null);
            setError('Select only image files! (png/jpg)');
        }
       // const { urls, progress } = useStorage(files);
    } 

  console.log(files);
  console.log(files[0]);
    return (
        <form>
          <label class="grow">
            <input type="file" id="files" multiple onChange={changeHandler} />
             📁 
          </label>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { files.length !== 0 && <div>{ "Uploading " + files.length + " files."}</div> }
            { files.length !== 0 && <ProgressBar files={files} setFiles={ (file) => setFiles(file) } /> } 
          </div>
        </form>
      );
    }

export default UploadForm;