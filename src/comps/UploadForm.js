import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import uploadButton from '../comps/uploadButton.png'

const UploadForm = () => {
    const [files, setFiles] = useState([]); //react hooks
    const [error, setError] = useState(null);

    const types = ['image/*'];

    const changeHandler = (e) => {
        let selected = e.target.files; // JUST THE FIRST FILE, THIS IS HOW U DO MULTIPLE 
        if(selected /*&& types.includes(selected.type)*/) {
          console.log(files);
            for (let i = 0; i < e.target.files.length; i++) {
                const list = files;
                list.push(selected[i]);
                setFiles(list);
                setError('');
            }
            //setFile(selected); //File in local state      
        } else {
            setFiles(null);
            setError('Select only image files! (png/jpg)');
        }
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
            { error && <div className="error">{ "TEST" + error }</div>}
            { files.length !== 0 && <div>{ "Uploading " + files.length + "files."}</div> }
            { files.length !== 0 && <ProgressBar files={files} setFiles={ () => setFiles} /> }
          </div>
        </form>
      );
    }

export default UploadForm;