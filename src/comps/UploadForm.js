import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [files, setFiles] = useState([]); //react hooks
    const [error, setError] = useState(null);
    

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
                setFiles(null);
                setError('Select only image files! (png/jpg)');
              }
            }
        } else {
            console.log("in second else");
            setFiles(null);
            setError('Error on upload, please try');
        }
    } 

    return (
        <form>
          <label class="grow">
            <input type="file" id="files" multiple accept="image/*" onChange={changeHandler} />
             <span>📁</span> 
          </label>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { files.length !== 0 && <ProgressBar files={files} setFiles={ (file) => setFiles(file) } /> } 
          </div>
        </form>
      );
    }

export default UploadForm;